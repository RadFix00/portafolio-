"use client";
import { useEffect, useState } from "react";
import Image from "next/image";    

export default function Hero() { 

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

  if (loading) return <div className="text-white font-mono p-10">Cargando telemetría...</div>;

  return (
    <section className="font-bold font-mono">
        <div>
            <h2>Hola, soy Nicolás</h2>
            <h1>Desarrollador Web & SysAdmin</h1>
            <h3>Entusiasta de la tecnología, el hadware, los servidores y de las motos</h3> 

            <div>
              <h1>boton we</h1>
            </div>
        </div>
        <div>
            <Image src="/img/pic-perfil.JPEG" alt="Foto de perfil" width={300} height={300}  />
        </div>
        <div className="w-s">
          <div>
            <h2 className="text-2xl font-bold mb-4">Estado de mis servicios</h2>
          </div>
          <div>
            {data.map((service) => (
              <div key={service.name} className="p-6 border border-slate-800 rounded-2xl bg-slate-900/40">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <div className={`h-3 w-3 rounded-full ${
                    service.status === 'online' ? 'bg-green-500 shadow-[0_0_10px_green]' : 'bg-red-500'
                  }`} />
                </div>
                <p className="text-xs mt-2 text-slate-500">
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