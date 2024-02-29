import { useEffect, useRef, useState } from "react";

export const useTimer = (time:number) => {
    const [isInactive, setIsInactive] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setIsInactive(true);
        }, time);
    };

    useEffect(() => {
        resetTimer();

        const handleDocumentClick = () => {
            resetTimer();
        };

        document.addEventListener("click", handleDocumentClick);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return { isInactive };
};
