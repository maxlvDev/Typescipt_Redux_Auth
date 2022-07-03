import { IContact, ContactActions, ContactActionTypes, ContactState } from "../types"

const initialState: ContactState = {
  contacts: [],
  error: null,
  contactId: null
}

export const contactReducer = (state = initialState, action: ContactActions): ContactState => {
  const { type, payload } = action
  switch (type) {
    case ContactActionTypes.GET_ALL_CONTACTS:
      return {
        ...state,
        contacts: payload.contacts
      }
    case ContactActionTypes.GET_ALL_CONTACTS_ERROR:
      return {
        ...state,
        error: payload.error
      }
    case ContactActionTypes.CREATE_CONTACT:
      return {
        ...state,
        contacts: payload.contacts ? [...state.contacts, payload.contacts] : [...state.contacts]
      }
    case ContactActionTypes.CREATE_CONTACT_ERROR:
      return {
        ...state,
        error: payload.error
      }
    case ContactActionTypes.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload.contactId)
      }
    case ContactActionTypes.CHANGE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts.filter(contact => contact.id !== payload.contact.id), payload.contact]
      }
    case ContactActionTypes.CHANGE_CONTACT_ERROR:
      return {
        ...state,
        error: payload.error
      }
    default: return state
  }

}  