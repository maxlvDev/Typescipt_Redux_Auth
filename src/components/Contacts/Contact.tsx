import  React, {useState, FC} from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Input from '@mui/material/Input'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { BACK_URL } from '../../utils/url'
import { IContact } from '../../redux/types'
import { useActions } from '../../utils/useActions'
import './Contacts.css'

interface ContactProps {
  contact: IContact;
}

export const Contact:FC<ContactProps> = ({ contact }) => {
  const [change, setChange] = useState(false)
  const [field, setField] = useState({
    name: '',
    number: '',
    id: contact.id
  })
  const {changeContact, deleteContact} = useActions()
  const CONTACTS_URL = BACK_URL + 'contacts'
  const inputHandler = (event:React.ChangeEvent<HTMLInputElement>): void =>
    setField({ ...field, [event.target.name]: event.target.value 
  })
  const editHandler = () => {
    changeContact(contact.id, field) 
    setChange(false)
  }
  const removeHandler = () => {
    deleteContact(contact.id) 
  }

  return (
    <div className='contact'>
      {change ?
        <div className='contact_change'>
          <Input name='name' value={field.name} placeholder='Имя' onChange={inputHandler} />
          <Input name='number' value={field.number} placeholder='Телефон' onChange={inputHandler} />
        </div>
        :
        <div className='contact_main'>
          <strong>{contact.name}</strong>
          <span>{contact.number}</span>
        </div>
      }
      <div className='buttons'>
        {change ?
          <CheckBoxIcon color="success" className='icon' onClick={editHandler} />
          :
          <EditIcon color="action" className='icon' onClick={() => setChange(true)} />
        }
        <DeleteIcon color="action" className='icon' onClick={removeHandler} />
      </div>
  </div>
  )
}
