"use client";
import { useEffect, useState } from "react";
import Image from "next/image";    

export default function Hero() { 


  const [showDragon, setShowDragon] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDragon(true);
      setTimeout(() => setShowDragon(false), 30000); // Ocultar después de que pase
    }, 6000); // Que pase cada 1 minuto
    
    return () => clearInterval(interval);
  }, []);

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStatus = async () => {
    try {
      const res = await fetch("/api/status");
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Error monitoreando servicios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 30000); // Actualiza cada 30 seg
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-black font-mono p-10">Cargando telemetría...</div>;

  

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">

      {showDragon && (
        <img 
          src="/img/drake.png" 
          className="dragon-fly w-100 md:w-200" 
          alt="Dragon Easter Egg" 
        />
      )}

      <div className="absolute inset-0 z-0">
        <Image 
          src="/img/bg.jpg" 
          alt="Background" 
          fill 
          className="blur-[2px]" 
          priority 
        />
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
        <div className="">
            <h2 className="text-4xl mb-4">Hola, soy Nicolás Rad</h2>
            <div className="max-w-3xl mb-4">
              <h1 className="text-8xl">Desarrollador Web & SysAdmin Junior</h1>
            </div>
              <h3 className="text-4xl max-w-2xl text-bold">Entusiasta de la tecnología, el hadware, los servidores y las motos</h3> 
            <div className="mt-20">
              <button className="btn-primary">Proyectos</button>
            </div>
        </div>
        <div>
            <Image className="drop-shadow-xl" src="/img/pic-perfil5.png" alt="Foto de perfil" loading="eager" width={500} height={700}/>
        </div>
        <div className="w-s">
            <h2 className="text-4xl min-w-2xs text-center mb-4">Status_services</h2>
            {data.map((service) => (
              <div key={service.name} className="p-6 mb-2 border border-slate-800 rounded-2xl bg-gray-70 ">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-mono font-bold">{service.name}</h3>
                  <div className={`h-3 w-3 rounded-full ${
                    service.status === 'online' ? 'bg-green-500 shadow-[0_0_10px_green]' : 'bg-red-500'
                  }`} />
                </div>
                <p className="text-xs mt-2  text-slate-500 font-mono font-bold">
                  Status: <span className={service.status === 'online' ? 'text-green-400' : 'text-red-400'}>
                    {service.status.toUpperCase()}
                  </span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}