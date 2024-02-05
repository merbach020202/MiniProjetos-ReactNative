import { HeaderContainer, HeaderContent, TextHeader } from "./style";

export function Header() {
    return (
        //Header container - View
        //HeaderContent - Safe Area View
        //TextHeader - Text

        <HeaderContainer>
            <HeaderContent>
                <TextHeader>Consumo da Api via Cep</TextHeader>
            </HeaderContent>
        </HeaderContainer>
    )
}