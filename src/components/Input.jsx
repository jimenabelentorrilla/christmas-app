import { useState } from 'react';

const Input = ( { onNewCategory } ) => { /* Recibo el setRegalos del componente padre y lo llamo luego donde quiera utilizarlo*/ 
    const [ inputValue, setInputValue ] = useState("");

    const onInputChange = ( event ) => {
      setInputValue(event.target.value); /*Dentro del input se cambiará el value de acuerdo al valor ingresado del event*/ 
    }

    const onSubmit = ( event ) => {
      event.preventDefault(); /*Mantiene el valor al hacer un refresh o presionar ENTER*/
      /** Validación para evitar que se envie en blanco*/ 
      if (inputValue.trim().length <= 1 ) return; /** .trim elimina los espacios adelante y atras. Si efectivamente el input es menor, se saldra de la funcion y no se ejecutara lo demas**/ 
      /*setRegalos( regalos => [ inputValue , ...regalos ]);  Mandamos un callback, todos los regalos anteriores (en el estado actual). Luego se inserta la desestructuración con el operador spread para que muestre los regalos anteriores.*/
      onNewCategory(inputValue.trim()); /* Emito un evento al padre para mejorar el código anterior*/ 
      setInputValue(""); /*Sera igual a un string vacio, sirve para limpiar la caja de texto luego de hacer el Submit */
    }  

  return (
    <>
        <form onSubmit={ onSubmit }>
          <input
            type='text'
            placeholder='¿Qué le vas a pedir a Papá Noel?'
            value= {inputValue} /*Se envia la property pero necesitamos un Onchange para que no se reenderice a la fuerza como read-only*/
            onChange={ onInputChange} /*se envia un evento a la funcion*/ 
          />
        </form>
    </>
  )
}

export default Input;