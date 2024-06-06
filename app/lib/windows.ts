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
    singleOpening: OpeningType;
}

interface TwoPart extends WindowCommonDetails {
    leftOpening: OpeningType;
    leftWidth: number;
    rightOpening: OpeningType;
    rightWidth: number;
}

interface ThreePart extends WindowCommonDetails {
    leftOpening: OpeningType;
    leftWidth: number;
    middleOpening: OpeningType;
    middleWidth: number;
    rightOpening: OpeningType;
    rightWidth: number;

}

interface FourPart extends WindowCommonDetails {
    leftOpening: OpeningType;
    leftWidth: number;
    middleLeftOpening: OpeningType;
    middleLeftWidth: number;
    middleRightOpening: OpeningType;
    middleRightWidth: number;
    rightOpening: OpeningType;
    rightWidth: number;
}
interface TwoPlusOnePart extends WindowCommonDetails {
    leftOpening: OpeningType;
    leftWidth: number;
    downHeight: number;
    rightOpening: OpeningType;
    rightWidth: number;
    topOpening: OpeningType;
    topHeight: number;
}
interface Special extends WindowCommonDetails {

}
interface HalfDoor extends WindowCommonDetails {
    doorOpening: OpeningType;
}
interface HalfDoorLWindow extends WindowCommonDetails {
    doorOpening: OpeningType;
    doorWidth: number;
    doorHeight: number;
    leftOpening: OpeningType;
    leftWidth: number;
    leftHeight: number;
}
interface HalfDoorRWindow extends WindowCommonDetails {
    doorOpening: OpeningType;
    doorWidth: number;
    doorHeight: number;
    rightOpening: OpeningType;
    rightWidth: number;
    rightHeight: number;
}
interface HalfDoorBWindow extends WindowCommonDetails {
    doorOpening: OpeningType;
    doorWidth: number;
    doorHeight: number;
    leftOpening: OpeningType;
    leftWidth: number;
    leftHeight: number;
    rightOpening: OpeningType;
    rightWidth: number;
    rightHeight: number;
}
interface GlassDoor extends WindowCommonDetails {
    doorOpening: OpeningType;
}
interface GlassDoorLWindow extends WindowCommonDetails {
    doorOpening: OpeningType;
    doorWidth: number;
    doorHeight: number;
    leftOpening: OpeningType;
    leftWidth: number;
    leftHeight: number;
}
interface GlassDoorRWindow extends WindowCommonDetails {
    doorOpening: OpeningType;
    doorWidth: number;
    doorHeight: number;
    rightOpening: OpeningType;
    rightWidth: number;
    rightHeight: number;
}
interface GlassDoorBWindow extends WindowCommonDetails {
    doorOpening: OpeningType;
    doorWidth: number;
    doorHeight: number;
    leftOpening: OpeningType;
    leftWidth: number;
    leftHeight: number;
    rightOpening: OpeningType;
    rightWidth: number;
    rightHeight: number;
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
        singleOpening: OpeningType.Left,
    },
    [WindowCode.TwoPart]: {
        ...initWindowCommonDetails(WindowCode.TwoPart),
        leftOpening: OpeningType.Left,
        leftWidth: 0,
        rightOpening: OpeningType.Left,
        rightWidth: 0,
    },
    [WindowCode.ThreePart]: {
        ...initWindowCommonDetails(WindowCode.ThreePart),
        leftOpening: OpeningType.Left,
        leftWidth: 0,
        middleOpening: OpeningType.Left,
        middleWidth: 0,
        rightOpening: OpeningType.Left,
        rightWidth: 0,
    },
    [WindowCode.FourPart]: {
        ...initWindowCommonDetails(WindowCode.FourPart),
        leftOpening: OpeningType.Left,
        leftWidth: 0,
        middleLeftOpening: OpeningType.Left,
        middleLeftWidth: 0,
        middleRightOpening: OpeningType.Left,
        middleRightWidth: 0,
        rightOpening: OpeningType.Left,
        rightWidth: 0,
    },
    [WindowCode.TwoPlusOnePart]: {
        ...initWindowCommonDetails(WindowCode.TwoPlusOnePart),
        leftOpening: OpeningType.Left,
        leftWidth: 0,
        downHeight: 0,
        rightOpening: OpeningType.Left,
        rightWidth: 0,
        topOpening: OpeningType.Left,
        topHeight: 0,
    },
    [WindowCode.Special]: {
        ...initWindowCommonDetails(WindowCode.Special),
    },
    [WindowCode.HalfDoor]: {
        ...initWindowCommonDetails(WindowCode.HalfDoor),
        doorOpening: OpeningType.Left,
    },
    [WindowCode.HalfDoorLWindow]: {
        ...initWindowCommonDetails(WindowCode.HalfDoorLWindow),
        doorOpening: OpeningType.Left,
        doorWidth: 0,
        doorHeight: 0,
        leftOpening: OpeningType.Left,
        leftWidth: 0,
        leftHeight: 0,
    },
    [WindowCode.HalfDoorRWindow]: {
        ...initWindowCommonDetails(WindowCode.HalfDoorRWindow),
        doorOpening: OpeningType.Left,
        doorWidth: 0,
        doorHeight: 0,
        rightOpening: OpeningType.Left,
        rightWidth: 0,
        rightHeight: 0,
    },
    [WindowCode.HalfDoorBWindow]: {
        ...initWindowCommonDetails(WindowCode.HalfDoorBWindow),
        doorOpening: OpeningType.Left,
        doorWidth: 0,
        doorHeight: 0,
        leftOpening: OpeningType.Left,
        leftWidth: 0,
        leftHeight: 0,
        rightOpening: OpeningType.Left,
        rightWidth: 0,
        rightHeight: 0,
    },
    [WindowCode.GlassDoor]: {
        ...initWindowCommonDetails(WindowCode.GlassDoor),
        doorOpening: OpeningType.Left,
    },
    [WindowCode.GlassDoorLWindow]: {
        ...initWindowCommonDetails(WindowCode.GlassDoorLWindow),
        doorOpening: OpeningType.Left,
        doorWidth: 0,
        doorHeight: 0,
        leftOpening: OpeningType.Left,
        leftWidth: 0,
        leftHeight: 0,
    },
    [WindowCode.GlassDoorRWindow]: {
        ...initWindowCommonDetails(WindowCode.GlassDoorRWindow),
        doorOpening: OpeningType.Left,
        doorWidth: 0,
        doorHeight: 0,
        rightOpening: OpeningType.Left,
        rightWidth: 0,
        rightHeight: 0,
    },
    [WindowCode.GlassDoorBWindow]: {
        ...initWindowCommonDetails(WindowCode.GlassDoorBWindow),
        doorOpening: OpeningType.Left,
        doorWidth: 0,
        doorHeight: 0,
        leftOpening: OpeningType.Left,
        leftWidth: 0,
        leftHeight: 0,
        rightOpening: OpeningType.Left,
        rightWidth: 0,
        rightHeight: 0,
    },
    [WindowCode.Door]: {
        ...initWindowCommonDetails(WindowCode.Door),
        Opening: DoorOpeningType.Left,
        OpeningWay: DoorOpeningWayType.In
    },
};