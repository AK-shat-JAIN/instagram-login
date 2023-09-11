import './App.css'
import Logo from './components/Logo/Logo'
import logo from "./assets/instalogo.png"
import Form from './components/Form/Form'
import { useState } from 'react'
import Alternate from './components/Alternate/Alternate'


function App() {
  const [signin, setSignin] = useState(true);

  function change(){
    setSignin(!signin);
  }

  return (
    <>
      <div className='outer'>
        <Logo src={logo} />
        <Form status={signin}/>
        <Alternate status={signin} clicked={change} />
      </div>
    </>
  )
}

export default App
