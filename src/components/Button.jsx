const Button = ({text}) => {
    const handleClick = (titulo) => {
      console.log("me diste click  " + titulo);
    };
    return <button onClick={handleClick(text)}>{text}</button>;
  };

  export default Button;