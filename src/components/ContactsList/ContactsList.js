import PropTypes from "prop-types"
import styled from "./ContactsList.module.css"
import { connect } from "react-redux"
import actions from "../../redux/contacts/contacts-actions"

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts?.map(({ id, name, number }) => (
        <li className={styled.item} key={id}>
          <p className={styled.text}>{name}:</p>
          <p className={styled.text}>{number}</p>
          {/* <button className={styled.button} onClick={() => remove(id)}> */}
          <button className={styled.button} onClick={() => onDeleteContact(id)}>
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

// const filterContact = () => {
//   const normalizedFilter = filter.toLowerCase()
//   return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter))
// }

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts
  const normalizedFilter = filter.toLowerCase()
  const existingContacts = items?.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter))

  return {
    contacts: existingContacts,
  }
}

// const mapStateToProps = (state) => ({
//   contacts: state.contacts.items,
// })

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)
