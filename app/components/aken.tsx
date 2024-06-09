import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import GeneratedForm from "@/components/Form/GeneratedForm";
import { Button } from "@/components/ui/button";
import {
  getEnumMapForWindowType,
  getWindowTypeLabelMap,
} from "@/components/Form/helpers/labels";
import { Window, windowDetailsMap, WindowTypes } from "@/lib/windows";
import { Form } from "@remix-run/react";

export default function WindowTypesList() {
  const [selectedFullWindowType, setSelectedFullWindowType] = useState<
    any | null
  >(null);
  const [selectedWindowType, setSelectedWindowType] = useState<any | null>(
    null
  );
  const [isWindowTypeSelected, setIsWindowTypeSelected] = useState(false);

  const handleSelect = (windowType: Window) => {
    const fullWindowType = windowDetailsMap[windowType.code];
    setSelectedWindowType(windowType);
    setSelectedFullWindowType(fullWindowType);
    setIsWindowTypeSelected(true);
  };
  const renderForm = () => {
    if (selectedFullWindowType) {
      const labelMap = getWindowTypeLabelMap(selectedFullWindowType);
      const enumMap = getEnumMapForWindowType(selectedFullWindowType);
      return (
        <GeneratedForm
          windowType={selectedFullWindowType}
          labelMap={labelMap}
          enumMap={enumMap}
          onChange={(newData) => console.log(newData)}
        />
      );
    }
    return null;
  };

  return (
    <div className="flex p-16">
      {isWindowTypeSelected ? (
        <div onClick={() => setIsWindowTypeSelected(false)}>
          <Card className="w-[350px] my-2 mr-24">
            <CardHeader>
              <CardTitle>{selectedWindowType.name}</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={"aknamudelid/" + selectedWindowType.img}
                alt={selectedWindowType.name}
                width="150"
                height="150"
              />
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 p-16">
          {WindowTypes.map((windowType) => (
            <div key={windowType.code} onClick={() => handleSelect(windowType)}>
              <Card className="w-[350px] my-2">
                <CardHeader>
                  <CardTitle>{windowType.name}</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={"aknamudelid/" + windowType.img}
                    alt={windowType.name}
                    width="150"
                    height="150"
                  />
                </CardContent>
                <CardFooter className="flex justify-between"></CardFooter>
              </Card>
            </div>
          ))}
        </div>
      )}
      <div>
        <Form method="post">
          <div className="grid grid-cols-2 gap-4">{renderForm()}</div>
        </Form>
      </div>
    </div>
  );
}
