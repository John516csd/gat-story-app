---
title: Accessibility
date: "2022-10-23"
description: "这是一篇关于无障碍的文章。"
author: "yanchenhao"
---

# 无障碍（Accessibility）

## 1. 意义 🎯

无障碍的意义在于使得一些行动能力，听觉，视觉能力有障碍的用户能够更加方便地访问页面。无障碍性的实现，不是设计师（UX/XD），不是开发(Dev)，不是质量分析师(QA)某个人的责任，而是整个产品研发过程中所有人的责任，也许从产品构思的那天的就要开始考虑。

## 2. 标准 📝

[Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## 3. 怎么做，需要注意什么？🤔

1. alt属性
    1. 每个img的标签都应该加上alt属性，如果一张图片是装饰性的每意义的就这样使用`alt=""` 就行了。
    2. 屏幕阅读器会告诉用户这个标签是一个图像，所以alt不需要多余的信息，比如说*“Picture of”*，直接说图片的内容即可。
    3. 图像的功能与其意义一样重要：如果你的logo图像直接链接到网站主页，那么它的alt文本应该是“Home Page”而不是“Logo”。
    4. alt的替代文本不仅是为了增加可访问性。有时，数据连接缓慢的用户会禁用图像，从而实现更快的浏览体验。
    5. 如果你使用的图像是svg，可以使用短描述`<title>`和长描述`<desc>` 
        
        ```html
        <symbol id="langIcon">
            <title>Language Icon</title>
            <desc>Longer description</desc>
            <path d="M0 2C6.47 2 2 6.48 2 12s4.47 10 9.99 0h24v24H0z" />
        </symbol>
        ```
        
2. 不要只是依赖颜色来表达信息，因为色盲的用户可能会遇到由颜色引发的问题，建议增加一些对应的图标来提示信息。
3. 不能禁用网页的缩放功能，~~`maximum-scale=1.0`~~
4. 使用语义化的标签，当选择使用不同的标签时，就决定了不同的层次结构，读屏软件会十分注重标签，所以要为每个元素使用正确的语义标签。
5. Button标签按钮的上下文是否足够清晰，以一个‘X’按钮为例，我们要增加额外的`aira-label`属性来帮助用户理解其作用。
    
    ```html
    <button aria-label="Close">X</button>
    ```
    
6. 必要时使用role属性。
    1. 为了告诉读屏器用户，某个链接是触发一个动作，不是普通的标签，必须加一个`role=”button”` 。写JS时，不仅应当用户点击的时候调用函数，也要给用户按下空格时候调用。
        
        ```jsx
        <a href="img/kitten.jpg" role="button" onclick="handleBtnClick(event)" onKeyPress="handleBtnKeyPress(event)">
            Button
        </a>
        
        function handleBtnClick(event) {        
            // Do something
        }
        
        function handleBtnKeyPress(event) {
            // Check to see if space or enter were pressed
            if (event.keyCode === 32 || event.keyCode === 13) {
                // Prevent the default action to stop scrolling when space is pressed
                event.preventDefault();
                // Do something
            }
        }
        ```
        
    2. HTML语义元素都有一个默认的role，比如`<a>`是**“link”**，`<nav>`是**“navigation”**

# END