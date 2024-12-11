import { useState, useEffect } from "react";
import moment from "moment-timezone";

const useHoraAtual = () => {
  const [horaAtual, setHoraAtual] = useState(
    moment().tz("America/Sao_Paulo").format("HH[h]mm[min]")
  );

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(moment().tz("America/Sao_Paulo").format("HH[h]mm[min]"));
    }, 1000);

    return () => clearInterval(intervalo); 
  }, []);

  return horaAtual;
};

export default useHoraAtual;
