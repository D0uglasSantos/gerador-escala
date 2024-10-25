"use client";
import GerarEscala from "@/components/gerarEscala";

export default function Home() {
  const handleScrollToEscala = () => {
    const escalaSection = document.getElementById("escala");
    if (escalaSection) {
      escalaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="h-screen flex flex-col items-center justify-center bg-black w-full drop-shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-4">
          Bem-vindo ao Gerenciador de Escala de Servidores
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Organize facilmente as escalas de cerimoniários e acólitos para as
          missas do final de semana.
        </p>
        <button
          className="px-6 py-3 bg-gray-400 text-white rounded hover:bg-gray-600 transition"
          onClick={handleScrollToEscala}
        >
          Ver mais
        </button>
      </div>
      <div id="escala">
        <GerarEscala />
      </div>
    </section>
  );
}
