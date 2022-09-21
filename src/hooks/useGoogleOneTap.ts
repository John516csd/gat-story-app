import React, { SetStateAction, useEffect, useState } from "react";

interface IGoogleOneTapRes {
    clientId: string;
    credential: string;
}

type TProp = (res: IGoogleOneTapRes) => void


const useGoogleOneTap = (callback: TProp) => {

    // 加载Google GSI脚本
    const loadGSIScript = () => {
        return new Promise<void>((res, rej) => {
            const gsiScript = document.getElementById('google-one-tap');
            if (!gsiScript) {
                const script = document.createElement('script');
                script.src = "https://accounts.google.com/gsi/client";
                script.id = "google-one-tap";
                document.body.appendChild(script);
                script.onload = () => {
                    res();
                }
                script.onerror = (err) => {
                    rej(err);
                }
            }
        })
    }

    // 配置client ID，打开one tap窗口
    const googleOneTapLogin = () => {
        window.google.accounts.id.initialize({
            client_id: "607512424005-ulmn4n12r7a5cq4v0oeggpb2k1najbj3.apps.googleusercontent.com",
            prompt_parent_id: "google-one-tap-id",
            auto_select: true,
            callback,
            cancel_on_tap_outside: false,
        });
        window.google.accounts.id.prompt();
    }

    useEffect(() => {
        loadGSIScript()
            .then(googleOneTapLogin)
            .catch((err) => {
                console.log("🚀 ~ file: useGoogleOneTap.ts ~ line 44 ~ useEffect ~ err", err);
            })
    })
}

export default useGoogleOneTap;