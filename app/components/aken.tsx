import React, { useState } from "react";
import { WindowTypes } from "@/components/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WindowTypesList() {
  const [selectedWindowType, setSelectedWindowType] = useState("");

  const handleSelect = (code: string) => {
    setSelectedWindowType(code);
  };

  return (
    <div className="grid grid-cols-3 gap-4 my-6">
      {WindowTypes.map(
        (windowType) =>
          (selectedWindowType === "" ||
            windowType.code === selectedWindowType) && (
            <div
              key={windowType.code}
              onClick={() => handleSelect(windowType.code)}
            >
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>{windowType.name}</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={"public/aknamudelid/" + windowType.img}
                    alt="bob"
                    width="150"
                    height="150"
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  {windowType.code}
                </CardFooter>
              </Card>
            </div>
          )
      )}
      <input type="hidden" value={selectedWindowType} />
      <p>Selected Window Type: {selectedWindowType}</p>
      <Button onClick={() => setSelectedWindowType("")}>Clear</Button>
    </div>
  );
}
