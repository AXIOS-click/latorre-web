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
            height={450}
            width={450}
            className={`${animationEndend ? "petry_center" : "scale-down-center"}`}
            onAnimationEnd={() => setAnimationEndend(!animationEndend)}
        />
    );
};

export default PetryCenter;
