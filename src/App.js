import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";
import TelaCadastroEndereco from "./components/TelaCadastroEndereco/TelaCadastroEndereco";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [valorCondicional, setValorCondicional] = useState(1)

  const mudarTela = (valor) => {
    setValorCondicional(valor)
  }

  // Resolução do exercício de fixação
   const renderizaTela = () => {
      return(valorCondicional === 1 && <TelaLogin mudarTela={mudarTela}/>
      || valorCondicional === 2 && <TelaCadastro mudarTela={mudarTela}/>
      || valorCondicional ===3 && <TelaCadastroEndereco mudarTela={mudarTela}/>
      || valorCondicional ===4 && <TelaUsuarioCadastrado mudarTela={mudarTela}/>
      )

   /*  switch (valorCondicional) {
      case 1:
        return <TelaLogin mudarTela={mudarTela} />;
      case 2:
        return <TelaCadastro mudarTela={mudarTela} />;
      case 3:
        return <TelaCadastroEndereco mudarTela={mudarTela}/>
      case 4:
        return <TelaUsuarioCadastrado/>
    } */
  }
  

  return (
    <MainContainer >
      <GlobalStyled />
     {/*  {valorCondicional === 1 && <TelaLogin mudarTela={mudarTela}/>}
      {valorCondicional === 2 && <TelaCadastro mudarTela={mudarTela}/>}
      {valorCondicional ===3 && <TelaCadastroEndereco mudarTela={mudarTela}/>}
      {valorCondicional ===4 && <TelaUsuarioCadastrado mudarTela={mudarTela}/>} */}
      {renderizaTela()}
    </MainContainer>
  );
}

export default App;