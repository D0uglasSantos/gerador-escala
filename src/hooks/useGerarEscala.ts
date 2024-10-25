import { useState } from "react";

type EscalaItem = {
  dia: string;
  horario: string;
  geral: string;
  palavra: string;
  credencia: string;
  acolito: string;
};

export const useGerarEscala = () => {
  const servidoresMock = {
    geral: [
      "Wandrey",
      "Daniel",
      "Douglas",
      "Pedro",
      "Luiz",
      "David",
      "Samuel",
      "Breno",
      "André",
      "Iury",
    ],
    palavraCredencia: [
      "Anderson",
      "Levi",
      "Paulo",
      "Elder",
      "Daniel B.",
      "Carlos E.",
      "Fernando M.",
      "Pablo",
      "Mateus",
      "Thiago",
      "Victor H.",
    ],
    acolitos: ["Davi", "Enzo", "Lucas", "Leonny", "João E.", "João V."],
  };

  // Tipando o estado da escala como um array de EscalaItem
  const [escala, setEscala] = useState<EscalaItem[]>([]);
  const [ultimaEscala, setUltimaEscala] = useState(false);

  const gerarEscala = () => {
    const novasEscalas: EscalaItem[] = [];
    const horarios = [
      { dia: "Sábado - Matriz", horario: "18h" },
      { dia: "Domingo - Capela", horario: "07h" },
      { dia: "Domingo - Matriz", horario: "08h30" },
      { dia: "Domingo - Matriz", horario: "11h" },
      { dia: "Domingo - Matriz", horario: "18h" },
      { dia: "Domingo - Matriz", horario: "20h" },
    ];

    // Conjuntos para rastrear os nomes já utilizados
    const usados = new Set<string>();

    horarios.forEach(({ dia, horario }) => {
      const cerimoniarioGeral = getRandomElement(
        servidoresMock.geral.filter((name) => !usados.has(name))
      );

      const palavraCredenciaOptions = [
        ...servidoresMock.palavraCredencia,
        ...servidoresMock.geral.filter(
          (name) => name !== cerimoniarioGeral && !usados.has(name)
        ),
      ];

      const cerimoniarioPalavra = getRandomElement(
        palavraCredenciaOptions.filter((name) => !usados.has(name))
      );

      const cerimoniarioCredencia = getRandomElement(
        palavraCredenciaOptions.filter(
          (name) => name !== cerimoniarioPalavra && !usados.has(name)
        )
      );

      const acolito = getRandomElement(
        servidoresMock.acolitos.filter((name) => !usados.has(name))
      );

      // Adicionar os nomes ao conjunto de usados
      usados.add(cerimoniarioGeral);
      usados.add(cerimoniarioPalavra);
      usados.add(cerimoniarioCredencia);
      usados.add(acolito);

      novasEscalas.push({
        dia,
        horario,
        geral: cerimoniarioGeral,
        palavra: cerimoniarioPalavra,
        credencia: cerimoniarioCredencia,
        acolito,
      });
    });

    setEscala(novasEscalas);
  };

  const getRandomElement = <T>(array: T[]): T =>
    array[Math.floor(Math.random() * array.length)];

  return { escala, gerarEscala };
};
