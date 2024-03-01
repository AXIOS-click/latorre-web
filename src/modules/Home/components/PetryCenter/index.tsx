"use client";
import { Latorre, PetryTemporal } from "@/assets/images/imageProvider";
import Image from "next/image";
import { useState } from "react";

const PetryCenter = () => {
    const [animationEnded, setAnimationEnded] = useState(false);
    const [startHeartbeat, setStartHeartbeat] = useState(false);
    const handleMouseLeave = () => {
        setTimeout(() => {
            setStartHeartbeat(true);
        }, 1000);
    };

    return (
        <div className="absolute flex w-full  justify-center  flex-col items-center justify-items-center">
            <div className="petry-container">
                <Image
                    src={PetryTemporal}
                    alt="Pintura Petry"
                    width={384}
                    height={384}
                    priority
                    className={`${animationEnded ? "petry-center" : "scale-down-center"} ${startHeartbeat && "heartbeat-effect"}`}
                    onAnimationEnd={() => {
                        setAnimationEnded(true);
                        setStartHeartbeat(false);
                    }}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
            <Image
                src={Latorre}
                alt="Pintura Petry"
                width={384}
                height={384}
                className={`fade-in ${animationEnded && "show aparecer-desde-abajo"} mt-3 sm:mt-16 latorre`}
                priority
            />
        </div>
    );
};

export default PetryCenter;
