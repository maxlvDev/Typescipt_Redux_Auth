export interface UserState {
    isAuthenticated: Boolean | null
    errors: null | string | undefined
    user: null | IUser
}

export enum UserTypes {
    USER_LOGIN = "USER_LOGIN",
    USER_REGISTER = "USER_REGISTER"
}

interface UserLogin {
    type: UserTypes.USER_LOGIN
    payload: UserState;
}

interface UserRegister {
    type: UserTypes.USER_REGISTER
    payload: {
        isAuthenticated: Boolean
    }
}

export interface IUser {
    username: string;
    password: string;
}

export type UserActions = UserLogin | UserRegister

export enum ContactActionTypes {
    CREATE_CONTACT = "CREATE_CONTACT",
    CREATE_CONTACT_ERROR = "CREATE_CONTACT_ERROR",
    GET_ALL_CONTACTS = "GET_ALL_CONTACTS",
    GET_ALL_CONTACTS_ERROR = "GET_ALL_CONTACTS_ERROR",
    DELETE_CONTACT = "DELETE_CONTACT",
    DELETE_CONTACT_ERROR = "DELETE_CONTACT_ERROR",
    CHANGE_CONTACT = "CHANGE_CONTACT",
    CHANGE_CONTACT_ERROR = "CHANGE_CONTACT_ERROR"
}

export interface IContact {
    name: string;
    number: string;
    id: number
}

export interface NewContact {
    name: string;
    number: string;
}

export interface ContactState {
    contacts: any[],
    error?: null | string;
    contactId?: number | null;
    contact?: IContact;

}

interface CreateAction {
    type: ContactActionTypes.CREATE_CONTACT;
    payload: {
        contacts: any[]
    }
}

interface CreateErrorAction {
    type: ContactActionTypes.CREATE_CONTACT_ERROR;
    payload: {
        error: null | string
    }
}

interface ChangeAction {
    type: ContactActionTypes.CHANGE_CONTACT;
    payload: {
        contact: IContact
    }
}

interface ChangeErrorAction {
    type: ContactActionTypes.CHANGE_CONTACT_ERROR;
    payload: {
        error: null | string
    }
}

interface DeleteAction {
    type: ContactActionTypes.DELETE_CONTACT;
    payload: {
        contactId: number
    }
}

interface GetAllAction {
    type: ContactActionTypes.GET_ALL_CONTACTS;
    payload: {
        contacts: any[]
    }
}

interface GetAllActionError {
    type: ContactActionTypes.GET_ALL_CONTACTS_ERROR;
    payload: {
        error: null | string
    }
}

export type ContactActions =
    CreateAction
    | CreateErrorAction
    | ChangeAction
    | ChangeErrorAction
    | DeleteAction
    | GetAllAction
    | GetAllActionError