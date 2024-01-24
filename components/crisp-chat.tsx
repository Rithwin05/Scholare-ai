"use client";

import {useEffect} from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("e5c44e7a-fc81-4d40-8b99-e47779f6dee8");
    }, []);

    return null;
}