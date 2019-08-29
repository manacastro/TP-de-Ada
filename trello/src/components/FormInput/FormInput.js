import React from 'react';
import './FormInput.scss';
import Button, {BUTTON_TYPES} from 'components/Button/Button'

const FormInput = () => (
    <form className='AreaInput'>      
      <textarea className='area' 
                type="text"
                value=''
              /> 
      <Button text='Guardar'type={BUTTON_TYPES.ICONTEXT} />       
    </form>
)
export default FormInput;