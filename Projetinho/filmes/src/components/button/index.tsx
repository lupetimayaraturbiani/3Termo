import React from 'react';
import './style.css';

interface ButtonProps{
    name: string;
}

const Button:React.FC<ButtonProps>  = ({name}) => {
    return(
        <div>
            <input className="button" type="submit" value={name}/>
        </div>
    );
}

export default Button;