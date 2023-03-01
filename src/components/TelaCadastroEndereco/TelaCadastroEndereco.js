import { FormContainer, StyledLabel, Input, SendButton } from "./styled"

function TelaCadastroEndereco(props) {
    return (
        <FormContainer>
            <h1>Informações Pessoais</h1>
            <StyledLabel htmlFor="endereco">
                Endereço:
                <Input id="endereco" />
            </StyledLabel>
            <StyledLabel htmlFor="numeroresidencia">
                Número da residência:
                <Input id="numeroresidencia" />
            </StyledLabel>
            <StyledLabel htmlFor="telefone">
                Telefone:
                <Input id="telefone" />
            </StyledLabel>
            <StyledLabel htmlFor="complemento">
                Complemento:
                <Input id="complemento" />
            </StyledLabel>
            <SendButton onClick={()=>props.mudarTela(4)}>Concluir cadastro</SendButton>
        </FormContainer>
    )
}


export default TelaCadastroEndereco