"use client";
import { Latorre, PetryTemporal } from "@/assets/images/imageProvider";
import { useQueryHook } from "@/shared/hooks/useQueryHook";
import { getAllEsculturas } from "@/shared/services/strapi/Escultura/aplication/esculturaService";
import Image from "next/image";
import { useState } from "react";

const PetryCenter = () => {
    const [animationEnded, setAnimationEnded] = useState(false);
    const [startHeartbeat, setStartHeartbeat] = useState(false);
    const handleMouseLeave = () => {
        setTimeout(() => {
            setStartHeartbeat(true);
        }, 750);
    };

    const { data } = useQueryHook({
        queryKey: ["getAllEsculturas"],
        queryFn: () => getAllEsculturas(),
    });

    if (data) {
        console.log(data, "niu");
    }
    return (
        <div className="absolute flex w-full justify-center flex-col items-center justify-items-center z-10">
            <div className="petry-container">
                <Image
                    src={PetryTemporal}
                    alt="Pintura Petry"
                    width={375}
                    height={375}
                    priority
                    className={`${animationEnded ? "petry-center" : "scale-down-center"} ${startHeartbeat && "heartbeat-effect"}`} style={{ position: "inherit", zIndex: 100 }}
                    onAnimationEnd={() => {
                        setAnimationEnded(true);
                        setStartHeartbeat(false);
                    }}
                    onMouseLeave={handleMouseLeave}
                />
                <Image
                    src={Latorre}
                    alt="Pintura Petry"
                    width={375}
                    height={375}
                    className={`fade-in ${animationEnded ? "show aparecer-desde-abajo" : ""} mt-5 sm:mt-10 latorre`}
                    priority
                />
            </div>
        </div>
    );
};

export default PetryCenter;
