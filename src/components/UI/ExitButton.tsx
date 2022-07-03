import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { UserTypes } from '../../redux/types';

export const ExitButton:FC = () => {


    const history = useNavigate();

    const dispatch = useDispatch()  
    
    
    const logout = () => {
      dispatch({
        type: UserTypes.USER_LOGIN,
        payload: {
          isAuthenticated: false,
          errors: null,
          user: null
        }
      })
      history('/auth')
    }

  return (
    <ExitToAppIcon className='exit' fontSize='large' color='action' onClick={logout} />
  )
}
