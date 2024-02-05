import { keyframes } from "styled-components";
import { InputText } from "./style";

export function Input ({
    placeholder,
    editable,
    fieldValue,
    onchangeText,
    KeyType,
    maxLength,
    onblur

}) {
    return (
        <InputText
            placeholder={placeholder}
            editable={editable}
            KeyBoardType={KeyType}
            maxLength={maxLength}
            value={fieldValue}
            onchangeText={onchangeText}
            onblur={onblur}
        />
    )
}