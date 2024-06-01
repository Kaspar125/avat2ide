import * as React from "react";

export type Window = {
  code: string;
  name: string;
  img: string;
};

export const WindowTypes: Window[] = [
  { code: "1part", name: "Üheosaline ", img: "1osaline.jpg" },
  { code: "2part", name: "Kaheosaline", img: "2osaline.jpg" },
  { code: "3part", name: "kolmeosaline", img: "3osaline.jpg" },
  { code: "4part", name: "neljaosaline", img: "4osaline.jpg" },
  { code: "2+1part", name: "2 all + 1 üleval", img: "2all1peal.jpg" },
];
