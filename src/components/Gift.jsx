import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Gift = () => {
  return (
    <>
      <div className='cnt-gift'>
        <p>sarasa</p>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </>
  )
}

export default Gift;