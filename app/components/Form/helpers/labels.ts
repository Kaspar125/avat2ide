export const labelMap: Record<string, string> = {
    code: 'Akna tüüp',
    width: 'Laius',
    height: 'Kõrgus',
    // TODO-Kaspar lisa väljad
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