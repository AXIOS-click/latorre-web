"use client";
import { Latorre, PetryTemporal } from "@/assets/images/imageProvider";
import Image from "next/image";
import { useState } from "react";

const PetryCenter = () => {
    const [animationEnded, setAnimationEnded] = useState(false);
    const [hoverEffectActive, setHoverEffectActive] = useState(false);

    const handleMouseEnter = () => {
        if (hoverEffectActive) {
            setHoverEffectActive(false);
        }
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setHoverEffectActive(true);
        }, 500);
    };

    return (
        <div className="absolute w-full justify-center flex flex-col items-center justify-items-center">
            <div className="petry-container">

            <Image
                src={PetryTemporal}
                alt="Pintura Petry"
                width={384}
                height={384}
                priority
                className={`${animationEnded ? "petry-center" : "scale-down-center"} ${hoverEffectActive && "heartbeat-effect"}`}
                onAnimationEnd={() => setAnimationEnded(!animationEnded)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />
                </div>
            <Image
                src={Latorre}
                alt="Pintura Petry"
                width={384}
                height={384}
                className={`fade-in ${animationEnded && "show"} mt-3 latorre`}
                priority
            />
        </div>
    );
};

export default PetryCenter;
