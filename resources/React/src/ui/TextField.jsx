import {Input, Label, Text, TextField as RATextField} from 'react-aria-components';

export default function TextField({description, errorMessage, label, ...props}) {
    return (
        <RATextField {...props}>
            <Label>{label}</Label>
            <Input className="border h-10 rounded p-4 w-full"/>
            {description && (
                <Text
                    className="text-sm text-gray-500"
                    slot="description"
                >
                    {description}
                </Text>
            )}
            {errorMessage && (
                <Text
                    className="text-sm text-red-500"
                    slot="errorMessage"
                >
                    {errorMessage}
                </Text>
            )}
        </RATextField>
    );
}
