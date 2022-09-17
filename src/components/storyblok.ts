import { useEffect, useCallback, useState } from "react";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.GATSBY_STORYBLOCK_ACCESS_TOKEN,
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default function useStoryblok(originalStory: any, location: string) {
  let [story, setStory] = useState(originalStory);

  if (story && typeof story.content === "string") {
    story.content = JSON.parse(story.content);
  }

  // see https://www.storyblok.com/docs/Guides/storyblok-latest-js
  const initEventListeners = useCallback(() => {
    const { StoryblokBridge } = window;

    if (typeof StoryblokBridge !== "undefined") {
      const storyblokInstance = new StoryblokBridge();

      storyblokInstance.on(["published", "change"], (event) => {
        // reloade project on save an publish
        if (typeof window !== "undefined") {
          // @ts-ignore
          window.location.reload(true);
        }
      });

      storyblokInstance.on(["input"], (event) => {
        // live updates when editing
        // @ts-ignore
        if (event.story.content._uid === story.content._uid) {
          // @ts-ignore
          setStory(event.story);
        }
      });

      storyblokInstance.on(["enterEditmode"], (event) => {
        // loading the draft version on initial view of the page
        // @ts-ignore
        Storyblok.get(`cdn/stories/${event.storyId}`, {
          version: "draft",
        })
          .then(({ data }) => {
            if (data.story) {
              setStory(data.story);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  }, [story.content._uid]);

  function addBridge(callback: { (): void; (): void; }) {
    // check if the script is already present
    const existingScript = document.getElementById("storyblokBridge");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `//app.storyblok.com/f/storyblok-v2-latest.js`;
      script.id = "storyblokBridge";
      document.body.appendChild(script);
      script.onload = () => {
        // call a function once the bridge is loaded
        callback();
      };
    } else {
      callback();
    }
  }

  useEffect(() => {
    // load bridge only inside the storyblok editor
    // @ts-ignore
    if (location.search.includes("_storyblok")) {
      // first load the bridge and then attach the events
      addBridge(initEventListeners);
    }
  }, [location.search, initEventListeners]); // it's important to run the effect only once to avoid multiple event attachment

  return story;
}
