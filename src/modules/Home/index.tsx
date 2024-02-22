import React from "react";
import { OpenHomeAnimation } from "./components/OpenHome";
import PetryCenter from "./components/PetryCenter";
import { Navbar } from "./components/Navbar";

export const HomeModule = () => {
    return (
        <main className="w-full h-screen max-h-screen bg-black flex justify-center items-center">
            <OpenHomeAnimation />
            <Navbar/>
            <PetryCenter />
        </main>
    );
};
