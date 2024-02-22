"use client";
import { PetryTemporal } from "@/assets/images/imageProvider";
import Image from "next/image";
import { useState } from "react";

const PetryCenter = () => {
    const [animationEndend, setAnimationEndend] = useState(false);
    return (
        <Image
            src={PetryTemporal}
            alt="Pintura Petry"
            width={384}
            height={384}
            priority
            className={`${animationEndend ? "petry_center" : "scale-down-center"}`}
            onAnimationEnd={() => setAnimationEndend(!animationEndend)}
        />
    );
};

export default PetryCenter;
