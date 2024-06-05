import { color } from "framer-motion";

export enum WindowCode {
    OnePart = "1part",
    TwoPart = "2part",
    ThreePart = "3part",
    FourPart = "4part",
    TwoPlusOnePart = "2+1part",
    Special = "special",
    HalfDoor = "halfdoor",
    HalfDoorLWindow = "halfdoor+lwindow",
    HalfDoorRWindow = "halfdoor+rwindow",
    HalfDoorBWindow = "halfdoor+bwindow",
    GlassDoor = "glassdoor",
    GlassDoorLWindow = "glassdoor+lwindow",
    GlassDoorRWindow = "glassdoor+rwindow",
    GlassDoorBWindow = "glassdoor+bwindow",
    Door = "door"
}

export enum OpeningType {
    Left = "Vasakult",
    Right = "Paremalt",
    Top = "Ülevalt",
    RightPlusTop = "Paremalt ja ülevalt",
    LeftPlusTop = "Vasakult ja Ülevalt",
    None = "Mitteavatav",
}

export enum DoorOpeningType {
    Left = "Vasakult",
    Right = "Paremalt",
}
export enum DoorOpeningWayType {
    In = "Sisse",
    Out = "Välja",
}

export enum GlassType {
    Double = "Kahekordne",
    Triple = "Kolmekordne",
    Other = "Muu",
}

export enum ColorType {
    White = "Valge",
    Black = "Must",
    Grey = "Hall",
    Brown = "Pruun",
    Other = "Muu",
}

export type Window = {
    code: WindowCode;
    name: string;
    img?: string;
};
export const WindowTypes: Window[] = [
    { code: WindowCode.OnePart, name: "Üheosaline ", img: "1osaline.png" },
    { code: WindowCode.TwoPart, name: "Kaheosaline ", img: "2osaline.png" },
    { code: WindowCode.ThreePart, name: "kolmeosaline ", img: "3osaline.png" },
    { code: WindowCode.FourPart, name: "neljaosaline ", img: "4osaline.png" },
    { code: WindowCode.TwoPlusOnePart, name: "2 all + 1 üleval ", img: "2all1peal.png" },
    { code: WindowCode.Special, name: "erikujuline ", img: "erikuju.png" },
    { code: WindowCode.HalfDoor, name: "Uks(poolklaas) ", img: "pooluks.png" },
    { code: WindowCode.HalfDoorLWindow, name: "Uks(poolklaas) + ühend aken vasakul ", img: "pooluks_vasak_aken.png" },
    { code: WindowCode.HalfDoorRWindow, name: "Uks(poolklaas) + ühend aken paremal ", img: "pooluks_parem_aken.png" },
    { code: WindowCode.HalfDoorBWindow, name: "Uks(poolklaas) + ühend aken mõlemal pool ", img: "pooluks_mõlemal_aken.png" },
    { code: WindowCode.GlassDoor, name: "Uks(täisklaas)", img: "täisklaasuks.png" },
    { code: WindowCode.GlassDoorLWindow, name: "Uks(täisklaas) + ühend aken vasakul", img: "täisklaasuks_vasak_aken.png" },
    { code: WindowCode.GlassDoorRWindow, name: "Uks(täisklaas) + ühend aken paremal", img: "täisklaasuks_parem_aken.png" },
    { code: WindowCode.GlassDoorBWindow, name: "Uks(täisklaas) + ühend aken mõlemal pool", img: "täisklaasuks_mõlemal_aken.png" },
    { code: WindowCode.Door, name: "Terrassi- /välisuks", img: "uks.png" },
  ];
export type WindowDetails = OnePart | TwoPart | ThreePart | FourPart | TwoPlusOnePart | Special | HalfDoor | HalfDoorLWindow | HalfDoorRWindow | HalfDoorBWindow | GlassDoor | GlassDoorLWindow | GlassDoorRWindow | GlassDoorBWindow | Door;

export type OrderItem = {
    window: WindowDetails;
    count: number;
}
export type Order = {
    items: OrderItem[];
}


interface WindowCommonDetails {
    code: WindowCode;
    width: number;
    height: number;
    glass: GlassType;
    colorIn: ColorType;
    colorOut: ColorType;
    addon: string;
    // Add other common fields here
}

// Define interfaces for specific window types
interface OnePart extends WindowCommonDetails {
    firstOpening: OpeningType;
}

interface TwoPart extends WindowCommonDetails {
    firstOpening: OpeningType;
    firstWidth: number;
    firstHeight: number;
    secondOpening: OpeningType;
    secondWidth: number;
    secondHeight: number;
}

interface ThreePart extends WindowCommonDetails {
    firstOpening: OpeningType;
    firstWidth: number;
    firstHeight: number;
    secondOpening: OpeningType;
    secondWidth: number;
    secondHeight: number;
    thirdOpening: OpeningType;
    thirdWidth: number;
    thirdHeight: number;

}

interface FourPart extends WindowCommonDetails {
    firstOpening: OpeningType;
    firstWidth: number;
    firstHeight: number;
    secondOpening: OpeningType;
    secondWidth: number;
    secondHeight: number;
    thirdOpening: OpeningType;
    thirdWidth: number;
    thirdHeight: number;
    fourthOpening: OpeningType;
    fourthWidth: number;
    fourthHeight: number;
}
interface TwoPlusOnePart extends WindowCommonDetails {
    firstOpening: OpeningType;
    firstWidth: number;
    firstHeight: number;
    secondOpening: OpeningType;
    secondWidth: number;
    secondHeight: number;
    thirdOpening: OpeningType;
    thirdWidth: number;
    thirdHeight: number;
}
interface Special extends WindowCommonDetails {

}
interface HalfDoor extends WindowCommonDetails {
    firstOpening: OpeningType;
}
interface HalfDoorLWindow extends WindowCommonDetails {
    firstOpening: OpeningType;
    firstWidth: number;
    firstHeight: number;
    secondOpening: OpeningType;
    secondWidth: number;
    secondHeight: number;
}
interface HalfDoorRWindow extends WindowCommonDetails {
    firstOpening: OpeningType;
    firstWidth: number;
    firstHeight: number;
    secondOpening: OpeningType;
    secondWidth: number;
    secondHeight: number;
}
interface HalfDoorBWindow extends WindowCommonDetails {
    firstOpening: OpeningType;
    firstWidth: number;
    firstHeight: number;
    secondOpening: OpeningType;
    secondWidth: number;
    secondHeight: number;
    thirdOpening: OpeningType;
    thirdWidth: number;
    thirdHeight: number;
}
interface GlassDoor extends WindowCommonDetails {
    firstOpening: OpeningType;
}
interface GlassDoorLWindow extends WindowCommonDetails {
    firstOpening: OpeningType;
    firstWidth: number;
    firstHeight: number;
    secondOpening: OpeningType;
    secondWidth: number;
    secondHeight: number;
}
interface GlassDoorRWindow extends WindowCommonDetails {
    firstOpening: OpeningType;
    firstWidth: number;
    firstHeight: number;
    secondOpening: OpeningType;
    secondWidth: number;
    secondHeight: number;
}
interface GlassDoorBWindow extends WindowCommonDetails {
    firstOpening: OpeningType;
    firstWidth: number;
    firstHeight: number;
    secondOpening: OpeningType;
    secondWidth: number;
    secondHeight: number;
    thirdOpening: OpeningType;
    thirdWidth: number;
    thirdHeight: number;
}
interface Door extends WindowCommonDetails {
    Opening: DoorOpeningType;
    OpeningWay: DoorOpeningWayType;
}

const initWindowCommonDetails = (code: WindowCode): WindowCommonDetails => ({
    code,
    width: 0,
    height: 0,
    glass: GlassType.Double,
    colorIn: ColorType.White,
    colorOut: ColorType.White,
    addon:"",
});
// Map of window types and their details
const windowDetailsMap: Record<WindowCode, OnePart | TwoPart | ThreePart | FourPart | TwoPlusOnePart | Special | HalfDoor | HalfDoorLWindow | HalfDoorRWindow | HalfDoorBWindow | GlassDoor | GlassDoorLWindow | GlassDoorRWindow | GlassDoorBWindow | Door> = {
    [WindowCode.OnePart]: {
        ...initWindowCommonDetails(WindowCode.OnePart),
        firstOpening: OpeningType.Left,
    },
    [WindowCode.TwoPart]: {
        ...initWindowCommonDetails(WindowCode.TwoPart),
        firstOpening: OpeningType.Left,
        firstWidth: 0,
        firstHeight: 0,
        secondOpening: OpeningType.Left,
        secondWidth: 0,
        secondHeight: 0,
    },
    [WindowCode.ThreePart]: {
        ...initWindowCommonDetails(WindowCode.ThreePart),
        firstOpening: OpeningType.Left,
        firstWidth: 0,
        firstHeight: 0,
        secondOpening: OpeningType.Left,
        secondWidth: 0,
        secondHeight: 0,
        thirdOpening: OpeningType.Left,
        thirdWidth: 0,
        thirdHeight: 0,
    },
    [WindowCode.FourPart]: {
        ...initWindowCommonDetails(WindowCode.FourPart),
        firstOpening: OpeningType.Left,
    firstWidth: 0,
    firstHeight: 0,
    secondOpening: OpeningType.Left,
    secondWidth: 0,
    secondHeight: 0,
    thirdOpening: OpeningType.Left,
    thirdWidth: 0,
    thirdHeight: 0,
    fourthOpening: OpeningType.Left,
    fourthWidth: 0,
    fourthHeight: 0,
    },
    [WindowCode.TwoPlusOnePart]: {
        ...initWindowCommonDetails(WindowCode.TwoPlusOnePart),
        firstOpening: OpeningType.Left,
        firstWidth: 0,
        firstHeight: 0,
        secondOpening: OpeningType.Left,
        secondWidth: 0,
        secondHeight: 0,
        thirdOpening: OpeningType.Left,
        thirdWidth: 0,
        thirdHeight: 0,
    },
    [WindowCode.Special]: {
        ...initWindowCommonDetails(WindowCode.Special),
    },
    [WindowCode.HalfDoor]: {
        ...initWindowCommonDetails(WindowCode.HalfDoor),
        firstOpening: OpeningType.Left,
    },
    [WindowCode.HalfDoorLWindow]: {
        ...initWindowCommonDetails(WindowCode.HalfDoorLWindow),
        firstOpening: OpeningType.Left,
        firstWidth: 0,
        firstHeight: 0,
        secondOpening: OpeningType.Left,
        secondWidth: 0,
        secondHeight: 0,
    },
    [WindowCode.HalfDoorRWindow]: {
        ...initWindowCommonDetails(WindowCode.HalfDoorRWindow),
        firstOpening: OpeningType.Left,
        firstWidth: 0,
        firstHeight: 0,
        secondOpening: OpeningType.Left,
        secondWidth: 0,
        secondHeight: 0,
    },
    [WindowCode.HalfDoorBWindow]: {
        ...initWindowCommonDetails(WindowCode.HalfDoorBWindow),
        firstOpening: OpeningType.Left,
        firstWidth: 0,
        firstHeight: 0,
        secondOpening: OpeningType.Left,
        secondWidth: 0,
        secondHeight: 0,
            thirdOpening: OpeningType.Left,
        thirdWidth: 0,
        thirdHeight: 0,
    },
    [WindowCode.GlassDoor]: {
        ...initWindowCommonDetails(WindowCode.GlassDoor),
        firstOpening: OpeningType.Left,
    },
    [WindowCode.GlassDoorLWindow]: {
        ...initWindowCommonDetails(WindowCode.GlassDoorLWindow),
        firstOpening: OpeningType.Left,
        firstWidth: 0,
        firstHeight: 0,
        secondOpening: OpeningType.Left,
        secondWidth: 0,
        secondHeight: 0,
    },
    [WindowCode.GlassDoorRWindow]: {
        ...initWindowCommonDetails(WindowCode.GlassDoorRWindow),
        firstOpening: OpeningType.Left,
        firstWidth: 0,
        firstHeight: 0,
        secondOpening: OpeningType.Left,
        secondWidth: 0,
        secondHeight: 0,
    },
    [WindowCode.GlassDoorBWindow]: {
        ...initWindowCommonDetails(WindowCode.GlassDoorBWindow),
        firstOpening: OpeningType.Left,
        firstWidth: 0,
        firstHeight: 0,
        secondOpening: OpeningType.Left,
        secondWidth: 0,
        secondHeight: 0,
        thirdOpening: OpeningType.Left,
        thirdWidth: 0,
        thirdHeight: 0,
    },
    [WindowCode.Door]: {
        ...initWindowCommonDetails(WindowCode.Door),
        Opening: DoorOpeningType.Left,
        OpeningWay: DoorOpeningWayType.In
    },
};