import Lista from "../Lista/Lista";
import ListaProps from "../Lista/ListaProps";

export default function Conteudo(){

    // const dados:string = "Valor";
    const arrayDados = ["Valor1","Valor2","Valor3","Valor4","Valor5"];

    return(
        <main>
            <h2>Conteúdo</h2>
            <Lista/>
            <div>
                <ListaProps data={arrayDados} />
            </div>
        </main>
    );
}