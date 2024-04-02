import React from 'react'

const ShowPhrase = ({phrase}) => {
    return (
        <div className='text' >
            <p className='phrase'>"{phrase.phrase}"</p>
            <p className='author'>Fuente: {phrase.author}</p>
        </div>
    )
}

export default ShowPhrase