import React from 'react'
import getRandom from '../services/getRandom'
import arryphrases from '../utils/phrases.json'
import arrayImg from '../utils/images.json'


const ButtonPhrase = ({setPhrases, setImg}) => {

    const handelPhrase = () =>{
        setPhrases(getRandom(arryphrases))
        setImg(getRandom(arrayImg))
    }

    return (
        <button className='btn' onClick={handelPhrase}>
            Probar mi suerte
        </button>
    )
}

export default ButtonPhrase