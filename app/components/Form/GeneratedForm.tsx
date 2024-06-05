import React from 'react';
import {Input} from '@/components/ui/input';
import {FormItem, FormLabel} from '@/components/ui/form';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Checkbox} from '@/components/ui/checkbox';

interface FormProps<T> {
    data: T;
    labelMap: Record<keyof T, string>;
    enumMap?: Record<keyof T, string[]>;
    onChange: (newData: T) => void;
}

const GeneratedForm = <T extends Record<string, any>>({
                                                 data,
                                                 labelMap,
                                                 enumMap,
                                                 onChange,
                                             }: FormProps<T>) => {
    const handleChange = <K extends keyof T>(key: K, value: T[K]) => {
        const newData = {...data, [key]: value};
        onChange(newData);
    };

    return (
        <div>
            {Object.keys(data).map((key) => {
                const fieldKey = key as keyof T;
                const fieldValue = data[fieldKey];
                const label = labelMap[fieldKey];

                if (enumMap && typeof fieldValue === 'string' && enumMap[fieldKey]) {
                    // Render dropdown for enum fields
                    return (
                        <FormItem key={key}>
                            <FormLabel>{label}</FormLabel>
                            <Select
                                name={key}
                                defaultValue={fieldValue}
                                onValueChange={(value) => handleChange(fieldKey, value as T[keyof T])}
                            >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select an option"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {enumMap[fieldKey].map((option) => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    );
                }

                if (typeof fieldValue === 'boolean') {
                    // Render checkbox for boolean fields
                    return (
                        <FormItem key={key}>
                            <FormLabel>
                                <Checkbox
                                    id={key}
                                    name={key}
                                    checked={fieldValue}
                                    onCheckedChange={(value) => {
                                        if (typeof value === 'boolean') {
                                            handleChange(fieldKey, value);
                                        }
                                    }}
                                />
                                {label}
                            </FormLabel>
                        </FormItem>
                    );
                }

                // Render input field for other field types
                return (
                    <FormItem key={key}>
                        <FormLabel>{label}</FormLabel>
                        <Input
                            name={key}
                            defaultValue={fieldValue}
                            onChange={(value) => handleChange(fieldKey, value as T[keyof T])}
                        />
                    </FormItem>
                );
            })}
        </div>
    );
};

export default GeneratedForm;