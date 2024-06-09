import {ColorType, DoorsOpeningType, DoorOpeningWayType, GlassType, OpeningType} from '@/lib/windows';

export const labelMap: Record<string, string> = {
    code: 'Akna tüüp',
    width: 'Kogu laius (mm)',
    height: 'Kogu kõrgus (mm)',
    glass: 'Klaaspakett',
    colorIn: 'Profiilvärv sees',
    colorOut: 'Profiilvärv väljas',
    addon: 'Lisa',
    singleOpening: 'Avatavus',
    leftOpening: 'Vasakpoolse avatavus',
    leftWidth: 'Vasakpoolse laius (mm)',
    rightOpening: 'Parempoolse avatavus',
    rightWidth: 'Parempoolse laius (mm)',
    middleOpening: 'Keskmine avatavus',
    middleWidth: 'Keskmise laius (mm)',
    middleLeftOpening: 'Teise jaotuse avatavus',
    middleLeftWidth: 'Teise jaotuse laius (mm)',
    middleRightOpening: 'Kolmanda jaotuse avatavus',
    middleRightWidth: 'Kolmanda jaotuse laius (mm)',
    downHeight: 'Alumine kõrgus (mm)',
    topOpening: 'Ülemine avatavus',
    topHeight: 'Ülemine avatavus',
    doorOpening: 'Ukse avatavus',
    doorWidth: 'Ukse laius (mm)',
    doorHeight: 'Ukse kõrgus',
    outDoorOpening: 'Ukse Avatavus',
    OpeningWay: 'Avanemise suund',
    delivery: 'Tarne',
    installation: 'Paigaldus',
};

export function getWindowTypeLabelMap<T extends Record<string, any>>(type: T): Record<keyof T, string> {
    const typeLabelMap: Record<keyof T, string> = {} as Record<keyof T, string>;

    for (const key in type) {
        if (labelMap.hasOwnProperty(key)) {
            typeLabelMap[key as keyof T] = labelMap[key];
        }
    }

    return typeLabelMap;
}


export function getEnumMapForWindowType<T extends Record<string, any>>(windowType: T): Record<keyof T, string[]> {
    const enumMap: Record<keyof T, string[]> = {} as Record<keyof T, string[]>;

    for (const key in windowType) {
        const fieldValue = windowType[key as keyof T];

        // Check if the field value is an enum
        if (typeof fieldValue === 'string' && Object.values(OpeningType).includes(fieldValue)) {
            enumMap[key as keyof T] = Object.values(OpeningType);
        } else if (typeof fieldValue === 'string' && Object.values(GlassType).includes(fieldValue)) {
            enumMap[key as keyof T] = Object.values(GlassType);
        } else if (typeof fieldValue === 'string' && Object.values(ColorType).includes(fieldValue)) {
            enumMap[key as keyof T] = Object.values(ColorType);
        } else if (typeof fieldValue === 'string' && Object.values(DoorsOpeningType).includes(fieldValue)) {
            enumMap[key as keyof T] = Object.values(DoorsOpeningType);
        } else if (typeof fieldValue === 'string' && Object.values(DoorOpeningWayType).includes(fieldValue)) {
            enumMap[key as keyof T] = Object.values(DoorOpeningWayType);
        }
    }

    return enumMap;
}