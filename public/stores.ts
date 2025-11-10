import type { ImageMetadata } from "astro";

import cinemexLogo from "./store/cinemex-logo.webp";
import aceHardwareLogo from "./store/Ace_Hardware_Logo.webp";
import delsolLogo from "./store/delsol-logo.webp";
import elGranPastorLogo from "./store/el-gran-pastor-logo.webp";
import hebLogo from "./store/heb-logo.webp";
import sec5Logo from "./store/logo-5aSec.png";
import bombasticLogo from "./store/logo-bombastic.png";
import breedSushiLogo from "./store/logo-breedSushi.png";
import chocolatesCacepLogo from "./store/logo-chocolatesCacep.png";
import frutalYogurthLogo from "./store/logo-frutalYogurth.png";
import greatFitnessLogo from "./store/logo-greatFitness.png";
import kikoDonasLogo from "./store/logo-kikoDonas.png";
import macropayLogo from "./store/logo-macropay.png";
import palaxLogo from "./store/logo-palax.png";
import perlasBallonsLogo from "./store/logo-perlasBallons.jpg";
import promodaLogo from "./store/logo-promoda.png";
import sallyLogo from "./store/logo-sally.png";
import silviaCarnevaliLogo from "./store/logo-silviaCarnevali.png";
import yogufrutLogo from "./store/logo-yogufrut.png";
import masVisionLogo from "./store/mas-vision.webp";
import mrTostLogo from "./store/mrTost.png";
import parisinaLogo from "./store/parisina-logo.png";
import petcoLogo from "./store/petco-logo.webp";

interface Store {
    title: string;
    image?: ImageMetadata;
    horario: string;
    category:
    | "Servicios y entretenimiento"
    | "Departamentales"
    | "Ropa y accesorios"
    | "Alimentos"
    | "Salud y belleza"
    | "Especializadas"
    | "Otros";
}

export const stores: Store[] = [
    { title: "5ª SEC", image: sec5Logo, horario: "8:00am a 8:00pm", category: "Servicios y entretenimiento" },
    { title: "ACE HARDWARE", image: aceHardwareLogo, horario: "9:00am - 9:00pm", category: "Departamentales" },
    { title: "BOMBASTIC", image: bombasticLogo, horario: "10:30am - 7:30pm", category: "Ropa y accesorios" },
    { title: "BREED SUSHI", image: breedSushiLogo, horario: "11:30am - 8:00pm", category: "Alimentos" },
    { title: "CHOCOLATES CACEP", image: chocolatesCacepLogo, horario: "8:00am - 9:00pm", category: "Alimentos" },
    { title: "CINEMEX", image: cinemexLogo, horario: "7:00am - 12:00am", category: "Servicios y entretenimiento" },
    { title: "DEL SOL", image: delsolLogo, horario: "11:00am - 9:00pm", category: "Departamentales" },
    { title: "FONDA CHINA", image: "", horario: "12:00pm - 9:00pm", category: "Alimentos" },
    { title: "FRUTAL YOGURTH", image: frutalYogurthLogo, horario: "11:00am - 9:30pm", category: "Alimentos" },
    { title: "GREAT FITNESS", image: greatFitnessLogo, horario: "5:00am - 10:00pm", category: "Salud y belleza" },
    { title: "GRAN PASTOR", image: elGranPastorLogo, horario: "7:00am - 12:00am", category: "Alimentos" },
    { title: "HEB", image: hebLogo, horario: "6:00am - 11:00pm", category: "Departamentales" },
    { title: "KIKO DONAS", image: kikoDonasLogo, horario: "11:00am - 8:00pm", category: "Alimentos" },
    { title: "LA REBELDIA DEL POLLO", image: "", horario: "11:30am - 8:00pm", category: "Alimentos" },
    { title: "MACROPAY", image: macropayLogo, horario: "10:00am - 8:00pm", category: "Servicios y entretenimiento" },
    { title: "MAS VISION", image: masVisionLogo, horario: "11:00am - 8:00pm", category: "Salud y belleza" },
    { title: "MR TOST", image: mrTostLogo, horario: "12:00pm - 8:00pm", category: "Alimentos" },
    { title: "MINI SHOP", image: '', horario: "", category: "Otros" },
    { title: "PARISINA", image: parisinaLogo, horario: "10:00am - 8:00pm", category: "Departamentales" },
    { title: "PALAX", image: palaxLogo, horario: "24hrs", category: "Alimentos" },
    { title: "PERLA'S BALLON'S", image: perlasBallonsLogo, horario: "10:00am - 9:00pm", category: "Especializadas" },
    { title: "PETCO", image: petcoLogo, horario: "8:00am - 9:00pm", category: "Especializadas" },
    { title: "PROMODA", image: promodaLogo, horario: "11:00am - 8:00pm", category: "Ropa y accesorios" },
    { title: "SALLYBEAUTY", image: sallyLogo, horario: "10:00am - 8:00pm", category: "Salud y belleza" },
    { title: "SILVIA CARNEVALI", image: silviaCarnevaliLogo, horario: "10:00am - 8:00pm", category: "Ropa y accesorios" },
    { title: "VEN X MAS", image: '', horario: "8:00am - 8:00pm", category: "Alimentos" },
    { title: "YOGUFRUT", image: yogufrutLogo, horario: "10:00am - 9:00pm", category: "Alimentos" },
].sort((a, b) => a.title.localeCompare(b.title));