import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import { GiftGrid } from './components/GiftGrid';

function App() {
  const [ regalos , setRegalos ] = useState ([]); /* En el componente de Input, le estoy pasando como una propiedad la funcion setRegalos para que lo reciba y puedan comunicarse entre componentes*/ 

  const onAddCategory = ( newCategory ) => {

      if ( regalos.includes(newCategory) ) return; /*Validar que sean únicos los nombres de array */ 

		  setRegalos([ newCategory, ...regalos]); /* Cada vez que hago click en el boton "+"" agrego un regalo, el operador spread hace que se mantenga la lista en el estado y no devuelva un array vacio. */
	}

  const onDelete = () => {
    
  }

  return (
    <>
      <div className='contenedor'>
            <div className='section-left'>
              <div className='bg-card'>
                <h1>¡Lista de regalos!</h1>
                <div className='cnt-input'> 
                  <Input 
                    onNewCategory={onAddCategory}
                  // setRegalos={ setRegalos } 
                  />  
                </div>
              </div>
              <div className='cnt-list-gifts'>
                  {
                    regalos.map( regalo => (
                      <GiftGrid 
                        key={regalo} 
                        regalo={regalo} />
                    ))
                  }
                </div>
            </div>
          </div>
    </>
  )
}

export default App;
