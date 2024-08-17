export default function Lista(){

    const nomes = ["Joaquim da Selva Xavier","Joel Jorge de Mello","Juca Bala"];
    
    return(

        <ul>
            {nomes.map((nome,i)=>(
                <li key={i}>{i+1} - {nome}</li>
            ))}
        </ul>

// <ul>
// <li>{nomes[0]}</li>
// <li>{nomes[1]}</li>
// <li>{nomes[2]}</li>
// </ul>

    );
}