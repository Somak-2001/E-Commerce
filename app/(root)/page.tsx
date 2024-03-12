'use client';

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(()=>{
    setIsMounted(true);
  },[]);

  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) =>  state.isOpen);

  // We donn't want any user to get in the site without creating any store
  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }
  },[isOpen, onOpen]);

  if(!isMounted){
    return null;
  }
  return (
   <main className="p-4">
    Root Page
   </main>
  );
}
