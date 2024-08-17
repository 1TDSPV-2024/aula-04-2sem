import Lista from "../Lista/Lista"
import ListaProps from "../Lista/ListaProps"

export default function Cabecalho(){

    //const dados:string = "Valor";
    const arrayDados = ["Volor1","Valor2","Valor3","Valor4","Valor5"];

    return(
        <main>
            <h2>Cabecalho</h2>
            <Lista/>
            <div>
                <ListaProps data={arrayDados}/>
            </div>
        </main>
    );
}