"use client";
import { useEffect, useState } from "react";
import Image from "next/image"; 

export default function About () {

    const about = [
        "Disfruto entender como funcionan las cosas,",
        "crear proyectos y montarlos en producción;",
        "Ahora mismo estoy enfoncado en seguir creciendo",
        "mis habilidades y mi experiencia como Desarrollador",
        "buscando proyectos donde pueda aprender y aportar"
    ];


    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">

            <div>
                <Image 
                  src="/img/bg1.jpg" 
                  alt="Background" 
                  fill 
                  className="blur-[2px]" 
                  priority 
                />
            </div>

            <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-20 max-w-8xl">

                <div>
                    <Image className="drop-shadow-xl" src="/img/pic-perfil5.png" alt="Foto de perfil" loading="eager" width={500} height={700}/>
                </div>

                <div className="flex justify-center align-middle ">
                   <div className="space-y-1">
                    {about.map((Line, index) => (
                        <div key={index} className="flex">
                            <span className="
                            bg-white
                            text-black
                            px-2
                            py-2
                            font-bold
                            text-[3rem]        
                            leading-[3rem]         
                            italic                 
                            transform          
                            -skew-x-[20deg]
                            ">
                                <span className=" inline-block transform skew-x-[20deg] tracking-tight ">
                                    {Line}
                                </span>
                            </span>
                        </div>
                    ))
                    }

                   </div>
                </div>
                
            </div>
        </section>
    )
}