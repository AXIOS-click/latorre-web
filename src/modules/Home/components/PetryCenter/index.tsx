"use client";
import { Latorre, PetryTemporal } from "@/assets/images/imageProvider";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { getAllEsculturas } from "@/shared/services/strapi/Escultura/aplication/esculturaService";
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

    const { data } = useQueryHook({
        queryKey: ["getAllEsculturas"],
        queryFn: () => getAllEsculturas(),
    });

    if (data) {
        console.log(data, "niu");
    }
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
                className={`fade-in ${animationEnded && "show aparecer-desde-abajo"} mt-16 latorre`}
                priority
            />
        </div>
    );
};

export default PetryCenter;
