import React from 'react'

import style from './style.module.scss'


interface Props {
    onChange: () => void;
}


const TokenInput = ({ onChange }: Props) => {
    return (
        <div className={style.tokenContainer}>
            Token: 
            <input onChange={onChange} />
        </div>
    )
}

export default TokenInput