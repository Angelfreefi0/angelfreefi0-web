import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Youtube, Users, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function CanalPage() {
  const [videos, setVideos] = useState([]);

  // 🔥 Cargar videos automáticamente (simulado)
  useEffect(() => {
    setVideos([
      "dQw4w9WgXcQ",
      "3JZ_D3ELwOQ",
      "L_jWHffIx5E"
    ]);
  }, []);

  return (
    <div className="relative min-h-screen text-white p-6 overflow-hidden">
      {/* Fondo animado pro */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-purple-900 animate-pulse"></div>

      <div className="relative z-10 grid gap-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold flex justify-center items-center gap-2">
            <Sparkles /> Angelfreefi0YT
          </h1>
          <p className="text-gray-300">🔥 Página automática nivel DIOS 🔥</p>
        </motion.div>

        {/* Botón suscripción */}
        <div className="text-center">
          <a href="https://youtube.com/@Angelfreefi0" target="_blank">
            <Button className="text-xl px-8 py-4">🚀 SUSCRÍBETE 🚀</Button>
          </a>
        </div>

        {/* Videos automáticos */}
        <Card className="bg-white/10 backdrop-blur rounded-2xl">
          <CardContent className="p-5 grid gap-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Youtube /> Videos automáticos
            </h2>

            {videos.map((id, index) => (
              <iframe
                key={index}
                className="w-full h-64 rounded-xl"
                src={`https://www.youtube.com/embed/${id}`}
                allowFullScreen
              ></iframe>
            ))}
          </CardContent>
        </Card>

        {/* Redes */}
        <Card className="bg-white/10 backdrop-blur rounded-2xl">
          <CardContent className="p-5 grid gap-3">
            <h2 className="text-xl font-bold flex items-center gap-2"><Users /> Redes</h2>
            <a href="https://youtube.com/@Angelfreefi0" target="_blank">
              <Button className="w-full">YouTube</Button>
            </a>
            <a href="#">
              <Button className="w-full">TikTok</Button>
            </a>
            <a href="#">
              <Button className="w-full">Discord</Button>
            </a>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-400">
          💀 Web automática (puedes cambiar IDs por tus videos reales)
        </div>
      </div>
    </div>
  );
}
