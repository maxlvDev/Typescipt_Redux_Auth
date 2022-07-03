import React, { useState, useEffect, FC } from 'react'
import Input from '@mui/material/Input'
import { Contact } from './Contact'
import { IContact } from '../../redux/types'
import { useActions } from '../../utils/useActions'
import { useTypedSelector } from '../../utils/useTypedSelector'

export const SearchContacs: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { getAllContacts } = useActions()
  useEffect(() => {
    getAllContacts()
  }, [])
  const contacts = useTypedSelector((state) => state.contact.contacts)
  const searchedContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div> 
      <div className='Contacts_search'>
      <Input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder='Поиск...' />
        <div className='contact_list'>
          {searchedContacts.length > 0 ?
            searchedContacts.map((contact: IContact) => <Contact contact={contact} key={contact.id} />)
            :
            <div style={{ textAlign: 'center', width: '100%', marginTop: '30px' }}>Контакты не найдены!</div>
          }
        </div>
      </div>
    </div>
  )
}
