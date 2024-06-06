import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { FormItem, FormLabel } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {Label} from '@/components/ui/label';

interface FormProps<T> {
    windowType: T;
    labelMap: Record<keyof T, string>;
    enumMap?: Record<keyof T, string[]>;
    onChange: (newData: T) => void;
}

const GeneratedForm = <T extends Record<string, any>>({
                                                          windowType,
                                                          labelMap,
                                                          enumMap,
                                                          onChange,
                                                      }: FormProps<T>) => {
    const [formData, setFormData] = useState<T>(windowType);

    const handleChange = <K extends keyof T>(key: K, value: T[K]) => {
        const newData: T = { ...formData, [key]: value };
        setFormData(newData);
        onChange(newData);
    };

    return (
        <div>
            {Object.keys(formData).map((key) => {
                const fieldKey = key as keyof T;
                const fieldValue = formData[fieldKey];
                const label = labelMap[fieldKey];

                if (enumMap && typeof fieldValue === 'string' && enumMap[fieldKey]) {
                    // Render dropdown for enum fields
                    return (
                        <div key={key} className={"mt-2"}>
                            {label && <Label className={"mt-2"}>{label}</Label>}
                            <Select
                                name={key}
                                defaultValue={fieldValue}
                                onValueChange={(value) => handleChange(fieldKey, value as T[keyof T])}
                            >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent>
                                    {enumMap[fieldKey].map((option) => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    );
                }


                if (typeof fieldValue === 'boolean') {
                    // Render checkbox for boolean fields
                    return (
                        <div key={key} className={"flex align-middle mb-2"}>
                            <Label className={"mt-2"}>
                                {label}
                                <Checkbox
                                    className={"ml-4 mt-1"}
                                    id={key}
                                    name={key}
                                    checked={fieldValue}
                                    onCheckedChange={(value) => {
                                        if (typeof value === 'boolean') {
                                            handleChange(fieldKey, value as T[keyof T]);
                                        }
                                    }}
                                />
                            </Label>
                        </div>
                    );
                }

                // Render input field for other field types
                return (
                    <div key={key}>
                        {(label && key !== 'code') && <Label className={"mt-2"}>{label}</Label>}
                        <Input
                            className={"mt-2 mb-4 w-full"}
                            type={key === "code" ? 'hidden': typeof fieldValue === 'number' ? 'number' : 'text'}
                            name={key}
                            defaultValue={fieldValue}
                            onChange={(value) => handleChange(fieldKey, value as T[keyof T])}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default GeneratedForm;