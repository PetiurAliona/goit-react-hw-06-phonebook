import ContactForm from "./components/ContactForm/ContactForm"
import Filter from "./components/Filter/Filter"
import ContactsList from "./components/ContactsList/ContactsList"

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  )
}

export default App
