import React from "react";
import { OpenHomeAnimation } from "./components/OpenHome";
import PetryCenter from "./components/PetryCenter";
import { Navbar } from "../../shared/components/Navbar";

export const HomeModule = () => {
    return (
        <main className="w-full h-screen max-h-screen bg-[#060114] flex justify-center items-center">
            <OpenHomeAnimation />
            <Navbar/>
            <PetryCenter />
        </main>
    );
};
