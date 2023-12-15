import './App.css';
import Logo from "./assets/Logo.png";
import Santa from "./assets/Group 1.png";
import Gift from "./components/Gift";

function App() {
  return (
    <>
      <div className='contenedor'>
          <div className='nav'>
                <img src={Logo}/>
          </div>
          <div className='main'>
            <div className='section-left'>
              <div className='bg-card'>
                <h1>¡Lista de regalos!</h1>
                <Gift />
               
              </div>
            </div>
            <div className='section-right'>
              <div className="santa-img">
                <img  src={Santa} />
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
