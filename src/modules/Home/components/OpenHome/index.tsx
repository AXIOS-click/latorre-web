"use client";

import { useState } from "react";

export const OpenHomeAnimation = () => {
    const [animationEnded, setAnimationEnded] = useState(false);

    return (
        <div
            className={`${animationEnded ? "hidden" : "scale-out-center"}`}
            onAnimationEnd={() => setAnimationEnded(!animationEnded)}
        ></div>
    );
};
