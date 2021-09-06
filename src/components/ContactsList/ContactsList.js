import PropTypes from "prop-types"
import styled from "./ContactsList.module.css"

const ContactsList = ({ contacts, remove }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={styled.item} key={id}>
          <p className={styled.text}>{name}:</p>
          <p className={styled.text}>{number}</p>
          <button className={styled.button} onClick={() => remove(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  remove: PropTypes.func,
}

export default ContactsList
