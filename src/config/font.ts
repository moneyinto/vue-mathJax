import { IFormula } from "@/types";

export const fonts: IFormula[] = [
    {
        url: new URL("@/assets/images/font/font1.png", import.meta.url).href,
        text: "mathrm"
    },

    {
        url: new URL("@/assets/images/font/font2.png", import.meta.url).href,
        text: "mathbf"
    },

    {
        url: new URL("@/assets/images/font/font3.png", import.meta.url).href,
        text: "mathit"
    },

    {
        url: new URL("@/assets/images/font/font4.png", import.meta.url).href,
        text: "underline"
    },

    {
        url: new URL("@/assets/images/font/font5.png", import.meta.url).href,
        text: "mathsf"
    },

    {
        url: new URL("@/assets/images/font/font6.png", import.meta.url).href,
        text: "mathbb"
    },

    {
        url: new URL("@/assets/images/font/font7.png", import.meta.url).href,
        text: "mathcal"
    },

    {
        url: new URL("@/assets/images/font/font8.png", import.meta.url).href,
        text: "mathfrak"
    }
];
