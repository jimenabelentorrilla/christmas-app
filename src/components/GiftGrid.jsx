import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const GiftGrid = ( { regalo } ) => {
  return (
    <>
        <div key={regalo} className='cnt-gift'>
            <p>{regalo}</p>
            <FontAwesomeIcon icon={faTrash} />
        </div>
    </>
  )
}
