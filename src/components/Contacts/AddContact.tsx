import React, { FC, useState } from 'react'
import FormGroup from '@mui/material/FormGroup'
import Input from '@mui/material/Input'
import { Button } from '@mui/material'
import { useActions } from '../../utils/useActions'

export const AddContact: FC = () => {
  const [info, setInfo] = useState({
    name: '',
    number: ''
  })
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setInfo({ ...info, [event.target.name]: event.target.value })
  const { createContacts } = useActions()
  const addHandler = () => {
    createContacts(info)
    setInfo({
      name: '',
      number: ''
    })
  }

  return (
    <div className='Contacts_add'>
      <FormGroup>
        <Input name='name' value={info.name} onChange={inputHandler} placeholder='Имя' />
        <Input name='number' value={info.number} onChange={inputHandler} placeholder='Телефон' />
        <div className='but'><Button type="submit" onClick={addHandler} variant='outlined'>Добавить</Button></div>
      </FormGroup>
    </div>
  )
}
