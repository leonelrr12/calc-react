import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ type, text, handleOnClick }) => ( 
  <button onClick={() => handleOnClick(text)}>
    <span className={type}>{text}</span>
  </button>
)

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired
}
 
export default Button;