import { Dispatch } from "react"
import { BACK_URL } from "../../utils/url"
import { IContact, ContactActionTypes, ContactActions, NewContact } from "../types"

const CONTACTS_URL = BACK_URL + 'contacts';

export function createContacts(contact: NewContact) {
  return (dispatch: Dispatch<ContactActions>) => {
    fetch(CONTACTS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    })
      .then(res => res.json())
      .then(resp => dispatch({
        type: ContactActionTypes.CREATE_CONTACT,
        payload: {
          contacts: resp,
        }
      }))
      .catch(err => dispatch({
        type: ContactActionTypes.CREATE_CONTACT_ERROR,
        payload: {
          error: err
        }
      }))
  }
}

export function getAllContacts() {
  return (dispatch: Dispatch<ContactActions>) => {
    fetch(CONTACTS_URL)
      .then(res => res.json())
      .then(resp => {
        dispatch({
          type: ContactActionTypes.GET_ALL_CONTACTS,
          payload: {
            contacts: resp
          }
        })
      })
      .catch(err => dispatch({
        type: ContactActionTypes.GET_ALL_CONTACTS_ERROR,
        payload: {
          error: err
        }
      }))
  }
}

export function deleteContact(id: number) {
  return (dispatch: Dispatch<ContactActions>) => {
    fetch(CONTACTS_URL + '/' + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => dispatch({
        type: ContactActionTypes.DELETE_CONTACT,
        payload: {
          contactId: id,
        }
      }))
      .catch(err => err())
  }
}

export function changeContact(id: number, contact: IContact) {
  return (dispatch: Dispatch<ContactActions>) => {
    fetch(CONTACTS_URL + '/' + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    })
      .then(res => res.json())
      .then(resp => {
        console.log(resp)
        dispatch({
          type: ContactActionTypes.CHANGE_CONTACT,
          payload: {
            contact: resp
          }
        })
      })
      .catch(err => dispatch({
        type: ContactActionTypes.CHANGE_CONTACT_ERROR,
        payload: {
          error: err
        }
      }))
  }
}
