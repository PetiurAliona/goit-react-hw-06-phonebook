import React, { useState, useEffect } from "react"
import ContactForm from "./components/ContactForm/ContactForm"
import Filter from "./components/Filter/Filter"
import ContactsList from "./components/ContactsList/ContactsList"

const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem("contacts")) ?? [])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  const addContact = (contact) => {
    if (contacts.find((item) => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`)
      return false
    }
    setContacts((prev) => [contact, ...prev])
    return true
  }

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id))
  }

  const handleChange = (e) => {
    setFilter(e.currentTarget.value)
  }

  const filterContact = () => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter))
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChange} />
      <ContactsList contacts={filterContact()} remove={deleteContact} />
    </>
  )
}

export default App
