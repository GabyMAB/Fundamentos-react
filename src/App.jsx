import { Fragment } from "react";
import ProtoTypes from "prop-types";
import Button from "./components/Button";
import Mensaje from "./components/Mensaje";
import ListaFruta from "./components/frutas/ListaFruta";




const App = () =>{
    const titulo = "Imagenes";
    const user = true;
    const frutas = ["🍍","🍎","🍓","🍒","🍌"];
    return(
        <Fragment>
        <h1 className="texto">{titulo.toUpperCase()}</h1>
        <img src="https://picsum.photos/200/300" alt=""/>
        <Button text= 'buton1'/>
        <Button text= 'buton2'/>
        <Button text= 'buton3'/>
        <Mensaje user = {user}/>
        <ListaFruta frutas={frutas}/>
       </Fragment>
    );
};

const App1 = () =>{
    const title = "Mi primer proyecto en react";
    return(
        <div className="container">
            <h1 className="text-primary">{title}</h1>
        </div>
    );
};

const App2 = () => {
    const title = "Mi primero proyecto con react";
    const classColors = {
      primary: "text-primary",
      info: "text-info",
    };
    return (
      <div className="container">
        <h1 className={classColors.primary}>{title}</h1>
        <p className={classColors.info}>Lorem ipsum dolor sit.</p>
      </div>
    );
};
 

  Button.prototype = {
    text:ProtoTypes.string.isRequired
  };



  
export default App;