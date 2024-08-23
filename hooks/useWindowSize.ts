import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const breakpoints = {
    small: 640,
    large: 1024,
};

type screenSize = "small" | "medium" | "large";

export const useBreakPoints = (): screenSize => {
    const isLarge = useMediaQuery({ minWidth: breakpoints.large });
    const isSmall = useMediaQuery({ maxWidth: breakpoints.small });
    return isLarge ? "large" : isSmall ? "small" : "medium";
};

export const useIsSmall = () => {
    const windowSize = useBreakPoints();
    return windowSize === "small";
};

export const useIsMedium = () => {
    const windowSize = useBreakPoints();
    return windowSize === "medium";
};
