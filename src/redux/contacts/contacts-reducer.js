import { combineReducers } from "redux"
import types from "./contacts-type"

const findName = function (contacts, payload) {
  const isContact = contacts.some((item) => item.name === payload.name)
  isContact && alert(`${payload.name} is already in contacts`)
  return !isContact ? [...contacts, payload] : contacts
}

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      // return [...state, payload]
      return findName(state, payload)

    case types.DELETE:
      return state.filter(({ id }) => id !== payload)

    default:
      return state
  }
}

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload

    default:
      return state
  }
}

export default combineReducers({
  items,
  filter,
})
