"use client";
import { useEffect, useState } from "react";
import Image from "next/image"; 

export default function About () {
    return (
        <section className="relative min-h-screen  items-center justify-center text-white">

            <div>
                <Image 
                  src="/img/bg1.jpg" 
                  alt="Background" 
                  fill 
                  className="blur-[2px]" 
                  priority 
                />
            </div>

            <div className="relative z-10">
                <div>
                    <h1>

                    </h1>

                </div>
                <div>
                   
                </div>
            </div>

         


        </section>
    )
}