"use client";
import { Latorre, PetryTemporal } from "@/assets/images/imageProvider";
import Image from "next/image";
import { useState } from "react";

const PetryCenter = () => {
    const [animationEndend, setAnimationEndend] = useState(false);
    return (
        <div className="absolute w-full justify-center flex flex-col items-center justify-items-center">
            <Image
                src={PetryTemporal}
                alt="Pintura Petry"
                width={384}
                height={384}
                priority
                className={`${animationEndend ? "petry_center" : "scale-down-center"}`}
                onAnimationEnd={() => setAnimationEndend(!animationEndend)}
            />
            <Image
                src={Latorre}
                alt="Pintura Petry"
                width={384}
                height={384}
                className={`fade-in ${animationEndend ? "show" : ""} mt-3`}
                priority
            />
        </div>
    );
};

export default PetryCenter;
