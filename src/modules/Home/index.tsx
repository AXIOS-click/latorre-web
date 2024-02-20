import React from "react";
import { OpenHomeAnimation } from "./components/OpenHome";

export const HomeModule = () => {
    return (
        <main className="w-full h-screen max-h-1screen bg-black flex justify-center items-center">
            <OpenHomeAnimation />
        </main>
    );
};
