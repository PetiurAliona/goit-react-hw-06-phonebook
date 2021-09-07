import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import actions from "./contacts-actions"

const findName = function (contacts, payload) {
  const isContact = contacts.some((item) => item.name === payload.name)
  isContact && alert(`${payload.name} is already in contacts`)
  return !isContact ? [...contacts, payload] : contacts
}

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => findName(state, payload),
  [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
})

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
  items,
  filter,
})
