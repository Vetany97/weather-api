import type React from "react";
import { useRef, useState } from "react";

export function useCarousel() {
    const [isDown, setIsDown] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDown(true);
        setStartX(e.pageX);
        if(carouselRef.current) {
            setScrollLeft(carouselRef.current.scrollLeft)
        }
        
    }

    const handleMouseUp = () => {
        setIsDown(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (e.buttons !== 1) {
            setIsDown(false);
            return;
        }

        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - startX;
        if(carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft - x;
        }
        
    }

    return {handleMouseDown, handleMouseUp, handleMouseMove, isDown, carouselRef}
}