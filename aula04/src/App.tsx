/**
*  Regras da criação da estrutura do componente funcional
* 1 - Deve ser um arquivo com a extensão JSX=Javascript ou TSX/Typescript
* 2 - O nome do arquivo deve iniciar com letra maiúscula. Ex: Componente
* 3 - A estrutura do componente deve ser igual ao de uma função Javascript.
* 4 - Todo componente deve ter em sua estrutura uma instrução return() para poder renderizar o conteúdo JSX ou TSX. Obs: os elementos JSX e TSX deve iniciar neste componente com um elemento de bloco pai. Ex: DIV/HEADER/MAIN/SELECT.
* 5 - Antes da palavra reservada function devemos adicionar a directiva export default para informar ao registrador que aquele componente pode ser visto, lido e importado por qualquer outro componente dentro do projeto.Ex: export default function
**/

import Cabecalho from "./components/Cabecalho/Cabecalho"
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";
import styles from "./CSS/App.module.css"

export default function App() {
  return(
    <div className="styles.container">
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
    </div>
  );
}