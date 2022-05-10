import React, { useState } from 'react'
import { string } from "prop-types";
import style from './Button.module.css'

export default function Button(props) {
    const [value, setValue] = useState(props.value);
    const [type, setType] = useState(props.type);
    <p role='p'>asas</p>
    switch (type) {
        case 'primary':
            return <button className={style.primary} onClick={props.click}>{value}</button>
            break;
        case 'secondary':
            return (<button className={style.secondary} onClick={props.click}>{value}</button>)
            break;
        case 'disabled':
            return <button className={style.disabled}>{value}</button>
            break;
    
        default:
            break;
    }
    
    
}


Button.protoTypes ={
    value: string
}