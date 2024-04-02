import './App.css'
import arryphrases from './utils/phrases.json'
import getRandom from './services/getRandom'
import arrayImg from './utils/images.json'
import { useState } from 'react'
import ShowPhrase from './components/ShowPhrase'
import ButtonPhrase from './components/ButtonPhrase'


function App() {

  const [phrase, setPhrases] = useState(getRandom(arryphrases))
  const [img, setImg] = useState(getRandom(arrayImg))



  const objStyle = {
    backgroundImage: `url(../public/img/fondo${img}.jpg)`,
  }

  return (
    <div className='app' style={objStyle} >
      <h1 className='app__titel' >Galletas de la fortuna</h1>
      <ShowPhrase
        phrase={phrase}
      />
      <ButtonPhrase
        setPhrases={setPhrases}
        setImg={setImg}
      />
    </div>
  )
}

export default App
