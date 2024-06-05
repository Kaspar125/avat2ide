import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import GeneratedForm from '@/components/Form/GeneratedForm';
import {Button} from '@/components/ui/button';
import {getEnumMapForWindowType, getWindowTypeLabelMap} from '@/components/Form/helpers/labels';
import {WindowTypes} from '@/lib/windows';

export default function WindowTypesList() {
  const [selectedWindowType, setSelectedWindowType] = useState(null);

  const handleSelect = (windowType) => {
    setSelectedWindowType(windowType);
  };

  const renderForm = () => {
    if (selectedWindowType) {
      const labelMap = getWindowTypeLabelMap(selectedWindowType);
      const enumMap = getEnumMapForWindowType(selectedWindowType);
      return (
          <GeneratedForm
              windowType={selectedWindowType}
              labelMap={labelMap}
              enumMap={enumMap}
              onChange={(newData) => console.log(newData)}
          />
      );
    }
    return null;
  };

  return (
      <div>
        <div className="grid grid-cols-3 gap-4 my-6">
          {WindowTypes.map((windowType) => (
              <div
                  key={windowType.code}
                  onClick={() => handleSelect(windowType)}
              >
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>{windowType.name}</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                        src={"aknamudelid/" + windowType.img}
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
          ))}
        </div>
        <div>{renderForm()}</div>
        <Button onClick={() => setSelectedWindowType(null)}>Clear</Button>
      </div>
  );
}