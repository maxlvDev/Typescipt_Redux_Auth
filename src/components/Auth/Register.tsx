import React, {FC, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '@mui/material/Input'
import FormGroup from '@mui/material/FormGroup'
import { Button } from '@mui/material'
import { useActions } from '../../utils/useActions'

export const Register:FC = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [check, setCheck] = useState({
    checkPass: ''  
  })
  const [error, setError] = useState(false)
  const {register} = useActions()
  const history = useNavigate();
  const signUp = () => {

    if(form.username.length > 0 && form.password.length > 0){
    register(form)
    history('/auth')
    } else {setError(true)}
    }

  return (
    <div className='Register'>
         <FormGroup>
            <div style={{marginBottom:'30px'}}>Регистрация</div>     
            <Input
            type="email"
            placeholder="Введите почту "
            name='username'
            onChange={event => setForm({ ...form, username: event.target.value })}/>
            <Input 
            type="password"
            placeholder="Введите пароль"
            name='password'
            onChange={event => setForm({ ...form, password: event.target.value })}/>
             <Input 
            type="password"
            placeholder="Повторите пароль"
            name='check'
            onChange={event => setCheck({...check, checkPass: event.target.value })}/>
            {check.checkPass == form.password?   
            <Button type="submit" variant='contained' style={{marginTop:'30px'}} onClick={signUp}>Зарегистрироваться</Button>
             : 
            <Button disabled variant='contained' style={{marginTop:'30px', color:'grey'}}>Пароли не совпадают</Button> }
            {error ? <div style={{color:'red', marginTop:'10px'}}> Некорректный логин или пароль </div> : null}
         </FormGroup>
    </div>
 )
}
