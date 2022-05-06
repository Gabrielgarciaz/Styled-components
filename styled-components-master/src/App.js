import React, {useState} from "react";
import { ThemeProvider } from "styled-components"; //Vai cuidar do escuro ou claro
import { temaEscuro, temaClaro  } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import {GlobalStyle} from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";
import SwittcherTema from "./Components/SwittcherTema";





function App() {

  const [tema, setTema] = useState(true)

  const trocaTema = () =>{
    setTema((tema) => !tema) // se for true passa pra false e o contrário
  }



  return (
  
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle/>
      <BtnTema onClick={trocaTema}>
        <SwittcherTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
    
  );
}

export default App;
