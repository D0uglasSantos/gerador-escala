"use client";
import { useEffect } from "react";
import { useGerarEscala } from "../hooks/useGerarEscala";

export default function GerarEscala() {
  const { escala, gerarEscala } = useGerarEscala();

  useEffect(() => {
    gerarEscala();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h3 className="text-black my-3 text-xl">
        Clique no botão abaixo para gerar a{" "}
        <span className="text-blue-700 font-bold">escala da semana!</span>
      </h3>
      <button
        onClick={gerarEscala}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-3 w-36"
      >
        Gerar Escala
      </button>
      <div className="bg-white px-2 py-6 rounded shadow-md w-full max-w-3xl">
        <h2 className="text-2xl text-center font-semibold text-gray-700 mb-4">
          Escala da Semana
        </h2>
        <ul className="flex flex-wrap gap-3 items-center justify-center">
          {escala.map((item: any, index: any) => (
            <li
              key={index}
              className="bg-gray-50 p-4 rounded shadow-md min-w-64"
            >
              <p className="font-medium border-b-2 border-gray-400 pb-1 text-blue-600">
                <span>{item.dia}</span> às <span>{item.horario}</span>
              </p>
              <p className="pt-1">
                Geral:{" "}
                <span className="font-semibold text-gray-700">
                  {item.geral}
                </span>
              </p>
              <p>
                Palavra:{" "}
                <span className="font-semibold text-gray-700">
                  {item.palavra}
                </span>
              </p>
              <p>
                Credência:{" "}
                <span className="font-semibold text-gray-700">
                  {item.credencia}
                </span>
              </p>
              <p>
                Acólito:{" "}
                <span className="font-semibold text-gray-700">
                  {item.acolito}
                </span>
              </p>
            </li>
          ))}
          <p className="text-gray-700 mb-3">Essa foi a última escala gerada!</p>
        </ul>
      </div>
    </div>
  );
}
