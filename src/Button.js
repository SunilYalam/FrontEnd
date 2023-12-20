import React from "react";


const Button = ({text, onclick}) => {
    return (
        <Button onclick={onclick}>
            {text}
        </Button>
    );
};

export default Button;