import PropTypes from "prop-types"
import styled from "./Filter.module.css"

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input value={value} onChange={onChange} name="filter" type="text" className={styled.input}></input>
  </label>
)

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter
