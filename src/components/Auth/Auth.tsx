import React, {FC, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import Input from '@mui/material/Input'
import FormGroup from '@mui/material/FormGroup'
import { useActions } from '../../utils/useActions'
import { useTypedSelector } from '../../utils/useTypedSelector'
import './Auth.css'

export const Auth:FC = () => {
  const [value, setValue] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState(false)
  const {login} = useActions()
  const isAuth = useTypedSelector((state)=>state.auth.isAuthenticated)
  const history = useNavigate()
  const logHandler = () => {
    
    if(value.username.length > 0 && value.password.length > 0){
    login(value, history) 
    } else {
    setError(true)
    }
    
    if(!isAuth){
    setError(true)
    }
  }

  const signHandler = () => {
    history('/signup')
  }

  return (
    <div className='Auth'>
      <FormGroup>
        <Input
          type="email"
          placeholder="email"
          name='username'
          onChange={event => setValue({ ...value, username: event.target.value })}
        />
        <Input
          type="password"
          placeholder="password"
          name='password'
          onChange={event => setValue({ ...value, password: event.target.value })}
        />
        {error? <div style={{color:'red', marginTop:'10px'}}> Неверный логин или пароль </div> : null}
        <Button style={{ marginTop: '30px' }} type="submit" variant='contained'
          onClick={logHandler}
        >
          Войти
        </Button>
        <Button style={{ marginTop: '20px' }} type="submit" variant='contained'
          onClick={signHandler}
        >
          Регистрация
        </Button>
      </FormGroup>
    </div>
  )
}

