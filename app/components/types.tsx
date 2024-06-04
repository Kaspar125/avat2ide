import * as React from "react";

export type Window = {
  code: string;
  name: string;
  img: string;
};

export const WindowTypes: Window[] = [
  { code: "1part", name: "Üheosaline ", img: "1osaline.png" },
  { code: "2part", name: "Kaheosaline", img: "2osaline.png" },
  { code: "3part", name: "kolmeosaline", img: "3osaline.png" },
  { code: "4part", name: "neljaosaline", img: "4osaline.png" },
  { code: "2+1part", name: "2 all + 1 üleval", img: "2all1peal.png" },
  { code: "special", name: "erikujuline", img: "erikuju.png" },
  { code: "halfdoor", name: "Uks(poolklaas)", img: "pooluks.png" },
  {
    code: "halfdoor+lwindow",
    name: "Uks(poolklaas) + ühend aken vasakul",
    img: "pooluks_vasak_aken.png",
  },
  {
    code: "halfdoor+rwindow",
    name: "Uks(poolklaas) + ühend aken paremal",
    img: "pooluks_parem_aken.png",
  },
  {
    code: "halfdoor+bwindow",
    name: "Uks(poolklaas) + ühend aken mõlemal pool",
    img: "pooluks_mõlemal_aken.png",
  },
  { code: "glassdoor", name: "Uks(täisklaas)", img: "täisklaasuks.png" },
  {
    code: "glassdoor+lwindow",
    name: "Uks(täisklaas) + ühend aken vasakul",
    img: "täisklaasuks_vasak_aken.png",
  },
  {
    code: "glassdoor+rwindow",
    name: "Uks(täisklaas) + ühend aken paremal",
    img: "täisklaasuks_parem_aken.png",
  },
  {
    code: "glassdoor+bwindow",
    name: "Uks(täisklaas) + ühend aken mõlemal pool",
    img: "täisklaasuks_mõlemal_aken.png",
  },
  { code: "door", name: "2 all + 1 üleval", img: "uks.png" },
];

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
