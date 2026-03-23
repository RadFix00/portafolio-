// src/app/api/status/route.ts
import { NextResponse } from 'next/server';
import net from 'net';

// Función para chequear si un puerto está abierto (TCP Ping)
const checkService = (host: string, port: number): Promise<boolean> => {
    return new Promise((resolve) => {
        const socket = new net.Socket();
        socket.setTimeout(2000); // 2 segundos de timeout

        socket.on('connect', () => {
            socket.destroy();
            resolve(true);
        });

        socket.on('error', () => {
            socket.destroy();
            resolve(false);
        });

        socket.on('timeout', () => {
            socket.destroy();
            resolve(false);
        });

        socket.connect(port, host);
    });
};

export async function GET() {
    const services = [
        { name: "Portfolio", host: "192.168.10.100", port: 8080 },
        { name: "Minecraft", host: "feature-retention.gl.joinmc.link", port: 25565 },
        { name: "ServerHome", host: "192.168.10.100", port: 81 },
        { name: "Qr.Listo", host: "192.168.10.100", port: 3000},
    ];

    const results = await Promise.all(
        services.map(async (s) => ({
            name: s.name,
            status: (await checkService(s.host, s.port)) ? "online" : "offline",
        }))
    );

    return NextResponse.json(results);
}