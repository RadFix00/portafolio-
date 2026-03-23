"use client";
import { useEffect, useState } from "react";
import Image from "next/image"; 

export default function Proyects () {
     return (
      <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      
        <div>
            <Image 
              src="/img/bg2.jpg" 
              alt="Background" 
              fill 
              className="blur-[2px]" 
              priority 
            />
        </div>

        <h1>hola q pedo</h1>

      </section>
     )

}