import React, { FC } from 'react'
import { AddContact } from './AddContact'
import { SearchContacs } from './SearchContacs'
import { ExitButton } from '../UI/ExitButton'
import './Contacts.css'

export const Contacts:FC = () => {
  return (
    <div className='Contacts'>
      <div className = 'Contacts_block'>
      <ExitButton/>
       <AddContact/>
      <hr style={{width:'90%',border:'none', borderTop:'1px solid grey'}}></hr>
       <SearchContacs/>
      </div>
    </div>
  )
}