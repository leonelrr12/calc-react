import React from 'react'
import PropTypes from 'prop-types'
import Button from './button/Button'

const Functions = ({ handleReset, handleDelOne }) => ( 
  <section className='functions'>
    <Button 
      type="button-long-text"
      text="CE"
      handleOnClick={handleReset} 
    />
    <Button 
      type=""
      text="&larr;"
      handleOnClick={handleDelOne} 
    />
  </section>
)

Functions.propTypes = {
  handleReset: PropTypes.func.isRequired, 
  handleDelOne: PropTypes.func.isRequired
}

export default Functions;