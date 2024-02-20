import { useId } from "react";
import { StaticImageData } from "next/image";

import logoMcdonalds from "@/assets/images/mcdonalds.png";
import logoLlaollao from "@/assets/images/llaollao.png";
import logoCinesa from "@/assets/images/cinesa.png";
import logoNudeProject from "@/assets/images/nudeproject.png";
import logoAlfa from "@/assets/images/alfa.png";
import logoTwitch from "@/assets/images/twitch.png";
import logoApple from "@/assets/images/apple.png";
import logoMicrocar from "@/assets/images/microcar.png";
import product01 from "@/assets/images/store01.png";
import product02 from "@/assets/images/store02.png";
import product03 from "@/assets/images/store03.png";
import product04 from "@/assets/images/store04.png";
import product05 from "@/assets/images/store05.png";
import product06 from "@/assets/images/store06.png";
import product07 from "@/assets/images/store07.png";
import product08 from "@/assets/images/store08.png";

export type StoreType = {
  id: string;
  logo: StaticImageData;
  image: StaticImageData;
  name: string;
  value: string;
};

function useStoreProduct() {
  const data: StoreType[] = [
    {
      id: useId(),
      logo: logoMcdonalds,
      image: product01,
      name: "Hamburguesa con queso",
      value: "9.500",
    },
    {
      id: useId(),
      logo: logoLlaollao,
      image: product02,
      name: "Yogurt helado",
      value: "17.500",
    },
    {
      id: useId(),
      logo: logoCinesa,
      image: product03,
      name: "Entrada de cine",
      value: "60.000",
    },
    {
      id: useId(),
      logo: logoNudeProject,
      image: product04,
      name: "80 € de descuento",
      value: "450.000",
    },
    {
      id: useId(),
      logo: logoAlfa,
      image: product05,
      name: "2 entradas concierto Aitana",
      value: "750.000",
    },
    {
      id: useId(),
      logo: logoTwitch,
      image: product06,
      name: "Suscripción anual",
      value: "850.000",
    },
    {
      id: useId(),
      logo: logoApple,
      image: product07,
      name: "Iphone 15",
      value: "8.000.000",
    },
    {
      id: useId(),
      logo: logoMicrocar,
      image: product08,
      name: "Microcar dué",
      value: "92.000.000",
    },
  ];

  return { data };
}

export default useStoreProduct;
