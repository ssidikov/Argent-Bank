import PropTypes from 'prop-types'
import { useState } from 'react'
import './Form.sass'

export default function Form({ firstInput, secondInput, checkbox, onSubmit, onSuccess }) {
  const [firstInputValue, setFirstInputValue] = useState('')
  const [secondInputValue, setSecondInputValue] = useState('')
  const [checkboxValue, setCheckboxValue] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await onSubmit(firstInputValue, secondInputValue, checkboxValue)
      onSuccess()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__input-wrapper'>
        <label className='form__label' htmlFor={firstInput}>
          {firstInput}
        </label>
        <input
          type='text'
          id={firstInput}
          value={firstInputValue}
          onChange={(e) => setFirstInputValue(e.target.value)}
          className='form__input'
        />
      </div>
      <div className='form__input-wrapper'>
        <label className='form__label' htmlFor={secondInput}>
          {secondInput}
        </label>
        <input
          type='password'
          id={secondInput}
          value={secondInputValue}
          onChange={(e) => setSecondInputValue(e.target.value)}
          className='form__input'
        />
      </div>
      <div className='form__input-remember'>
        <input
          type='checkbox'
          id={checkbox}
          checked={checkboxValue}
          onChange={(e) => setCheckboxValue(e.target.checked)}
          className='form__checkbox'
        />
        <label className='form__checkbox-label' htmlFor={checkbox}>
          Remember me
        </label>
      </div>
      <button className='form__sign-in-button' type='submit'>
        Sign in
      </button>
    </form>
  )
}

Form.propTypes = {
  firstInput: PropTypes.string.isRequired,
  secondInput: PropTypes.string.isRequired,
  checkbox: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
}
