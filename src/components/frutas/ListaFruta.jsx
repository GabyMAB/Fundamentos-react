import ItemFruta from "./ItemFruta";

const frutas = ["🍍","🍎","🍓","🍒","🍌"];

const ListaFruta = ({frutas}) =>{
    return(
        <ul>
            {frutas.map((frutas,index) => (
                <ItemFruta key={index} fruts={frutas}/>
            ))}
        </ul>
    );
}

export default ListaFruta;