import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "./ContactForm.module.css"
import { connect } from "react-redux"
import actions from "../../redux/contacts/contacts-actions"

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  const handleChangeName = (e) => {
    setName(e.currentTarget.value)
  }

  const handleChangeNumber = (e) => {
    setNumber(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(name, number)
    setName("")
    setNumber("")
  }

  return (
    <form className={styled.contactForm} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChangeName}
          className={styled.input}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChangeNumber}
          className={styled.input}
        />
      </label>
      <button type="submit" className={styled.button}>
        Add contact
      </button>
    </form>
  )
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
})

export default connect(null, mapDispatchToProps)(ContactForm)
