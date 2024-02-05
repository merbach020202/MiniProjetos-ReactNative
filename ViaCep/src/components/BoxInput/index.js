//para amanhã
//definir props

import { Input } from "../Input"
import { Label } from "../Label"
import { FieldContent } from "./style"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel, 
    placeholder,
    fieldValue = null,
    onChangeText = null,
    KeyTipe = 'default',
    maxLenght,
}) => {return(

    <FieldContent fieldWidth={fieldWidth}>
        <>

         <Label textLabel={textLabel}/>
        
        {/* Input */}
        <Input
            placeholder={placeholder}
            editable={editable}
            KeyTipe={KeyTipe}
            maxLenght={maxLenght}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
        />
        
        </>

        {/* label  */}
       
    </FieldContent>

       
    )
}
