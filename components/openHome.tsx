"use client";

import { useState } from "react";

export default function OpenHome() {
    const [animationEnded, setanimationEnded] = useState(false);

    const handleAnimationEnd = () => {
        setanimationEnded(true);
    };

    return (
        <div
            className={`${animationEnded ? "scale-up-center" : "scale-out-center"} flex items-center justify-center`}
            onAnimationEnd={handleAnimationEnd}
        ></div>
    );
}
