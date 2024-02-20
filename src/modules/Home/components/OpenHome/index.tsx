"use client";

import { useState } from "react";

export const OpenHomeAnimation = () => {
    const [animationEnded, setAnimationEnded] = useState(false);

    return (
        <div
            className={`${animationEnded ? "scale-up-center" : "scale-out-center"} flex items-center justify-center`}
            onAnimationEnd={() => setAnimationEnded(!animationEnded)}
        ></div>
    );
};
