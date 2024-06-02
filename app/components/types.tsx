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
