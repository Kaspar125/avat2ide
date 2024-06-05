import * as React from "react";

export type Product = {
  code: string;
  name: string;
  img: string;
  desc: string;
  desc2: string;
};

export const ProfileTypes: Product[] = [
  {
    code: "80mm",
    name: "Synego 80 mm profiil ",
    img: "Synego80mmprofiil.PNG",
    desc: "Antud profiilist aknad on paigaldamise sügavusega 80 mm ja Uf-väärtusega kuni 0,94 W/m2KSYNEGO akendega on teie kodu soe, hubane ja turvaline.",
    desc2:
      "Võrreldes nüüdisaegsete tavaliste akendega, pakub SYNEGO teile kuni 50% paremat soojusisolatsiooni.",
  },
  {
    code: "BD70mm",
    name: "BrilliantDesign 70 mm profiil ",
    img: "BD70mmprofiil.PNG",
    desc: "Antud PVC profiilist aknad on 70 mm paigaldussügavusega ja Uf väärtus kuni 1,3 W/m2K70 mm paigaldussügavuse ja paljude tehniliste võimaluste abil sobib Brillant-Design ideaalselt renoveerimiseks ja ümberehitamiseks.",
    desc2:
      "Eelised: Suurepärane staatiline vastupidavus. Saadaval kõigis KALEIDO COLOR värvides",
  },
  {
    code: "ED70mm",
    name: "EuroDesign 70 mm profiil ",
    img: "ED70mmprofiil.png",
    desc: "Antud PVC profiilist aknad on 70 mm paigaldussügavusega ja Uf väärtus kuni 1,3 W/m2K70 mm paigaldussügavuse ja paljude tehniliste võimaluste abil sobib Brillant-Design ideaalselt renoveerimiseks ja ümberehitamiseks.",
    desc2: "Eelised: Saadaval kõigis KALEIDO COLOR värvides, Odav hind",
  },
  {
    code: "SS",
    name: "Synego Slide ",
    img: "Stnegoslide.PNG",
    desc: "VC-süsteem 156 mm paigaldussügavusega ja Uf väärtus kuni 1,3 W/m2KSpetsiaalselt loodud lükandsüsteem, mis on ühtviisi atraktiivne nii seest kui väljast. Lükandaken, mida saab mugavalt ja lihtsalt avada ning sulgeda.",
    desc2:
      "Eelised: Annab ruumi sisustamiseks palju paindlikke kujundamisvõimalusi.Lükandakende kasutamine on lihtne ja mugav.",
  },
];

export const GlassTypes: Product[] = [
  {
    code: "karastatud",
    name: "Karastatud klaas",
    img: "karastatudklaas.PNG",
    desc: "Turvalisuse tõstmiseks on võimalik paigaldada aknasse ka karastatud klaas.",
    desc2: "",
  },
  {
    code: "jää",
    name: "Jääklaas",
    img: "jääklaas.PNG",
    desc: "Privaatsuse säilitamiseks saunades, toalettides jne, soovitame kasutada sealsetes akendes jääklaasi, kuna jääklaasist kumab küll valgus läbi, aga midagi muud pole võimalik temast läbi näha.",
    desc2:
      "Jääklaasi pealispind on tavaklaasist tunduvalt krobelisem, mis on ka katsudes käele tuntav. Puhastamisele see aga suurt raskuse erinevust ei loo.",
  },
  {
    code: "akna",
    name: "Aknaklaas",
    img: "aknaklaas.png",
    desc: "Akendesse paigaldatakse kas kahe- või kolmekordne klaas, valik seisneb selles kui soojuskindel peab aken olema.",
    desc2:
      "Eesmärgiga päikesesoojuse sissepääsemist hoonesse vähendada on võimalik tavaklaasi asemel kasutada päikesekaitsega toonklaasi. Toonklaasi võib valida ka välimuse pärast.",
  },
  {
    code: "toon",
    name: "Toonklaas",
    img: "toonklaas.png",
    desc: "Peamised toonklaasid on pronks, roheline ja hall. Erisoovil on võimalikud ka teised toonid.",
    desc2:
      "Kõik toonklaasid ei tule kohe koos päikesekaitsega. Kui on aga soov päikesekaitsega toonklaasile, siis peab seda eraldi mainima.",
  },
];