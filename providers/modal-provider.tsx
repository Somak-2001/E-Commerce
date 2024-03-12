'use client';

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
    // We have to take care of hydration error coz we are adding it to layout.tsx
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[])

    if(!isMounted) return null;
    return (
        <>
            <StoreModal />
        </>
    )
}