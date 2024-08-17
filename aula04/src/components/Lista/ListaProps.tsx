//Criando um tipo de dados igual ao componente:
type ListaProps = {
    data:string[];
}

export default function ListaProps({data}:ListaProps){
    return(
        <ul>
        {data.map((d,i)=>(
            <li key={i}>{i+1} - {d}</li>
        ))}
    </ul>     
    );
}

//Criando um tipo de dados igual ao componente:
// type ListaProps = {
//     data:string;
// }

// export default function ListaProps({data}:ListaProps){
//     return(
//         <div>
//             <p>Esse foi o dado passado: {data}</p>
//         </div>     
//     );
// }