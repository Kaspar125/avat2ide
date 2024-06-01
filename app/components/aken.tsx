import React, { useState } from "react";
import {WindowTypes} from '@/components/types';
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '@/components/ui/card';

export default function WindowTypesList() {
    const [selectedWindowType, setSelectedWindowType] = useState("");

    const handleSelect = (code:string) => {
        setSelectedWindowType(code);
    };

    return (
        <div className="grid grid-cols-3 gap-4 my-6">
            {WindowTypes.map((windowType) => (
                <div
                    key={windowType.code}
                    onClick={() => handleSelect(windowType.code)}
                >
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle></CardTitle>
                        </CardHeader>
                        <CardContent className={"justify-center flex"}>
                            <img src={"/aknamudelid/" + windowType.img} alt={windowType.name} />
                        </CardContent>
                        <CardFooter className="justify-center">
                            {windowType.name}
                        </CardFooter>
                    </Card>
                </div>
            ))}
            <input type="hidden" value={selectedWindowType} />
            <p>Selected Window Type: {selectedWindowType}</p>
        </div>
    );
}