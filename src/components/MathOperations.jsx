import React from 'react'
import PropTypes from 'prop-types'
import Button from './button/Button';

// import RemoveIcon from '@material-ui/icons/Remove';
// import AddIcon from '@material-ui/icons/Add';
// import ClearIcon from '@material-ui/icons/Clear';
// import BackspaceIcon from '@material-ui/icons/Backspace';


const operators = ["/","x","-","+","%"]
const MathOperations = ({ handleOnClickOperation, handleOnClickEqual }) => ( 
  <section className = "math-operations">
    {operators.map((num, key) => (
      <Button 
        key={key}
        type="button"
        text={num}
        handleOnClick={handleOnClickOperation}
      />
    ))}     
    <Button 
      type="button"
      text={"="}
      handleOnClick={handleOnClickEqual}
    />

  </section>
)

MathOperations.propTypes = {
  handleOnClickOperation: PropTypes.func.isRequired, 
  handleOnClickEqual: PropTypes.func.isRequired
}
 
export default MathOperations;