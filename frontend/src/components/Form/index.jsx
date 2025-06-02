import PropTypes from 'prop-types'
import { useState } from 'react'
import './Form.sass'

export default function Form({ firstInput, secondInput, checkbox, onSubmit, onSuccess, error }) {
  const [firstInputValue, setFirstInputValue] = useState('')
  const [secondInputValue, setSecondInputValue] = useState('')
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setFieldErrors({})

    // Basic validation
    const errors = {}
    if (!firstInputValue.trim()) {
      errors.firstInput = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(firstInputValue)) {
      errors.firstInput = 'Please enter a valid email'
    }
    if (!secondInputValue.trim()) {
      errors.secondInput = 'Password is required'
    } else if (secondInputValue.length < 6) {
      errors.secondInput = 'Password must be at least 6 characters'
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setIsLoading(false)
      return
    }

    try {
      await onSubmit(firstInputValue, secondInputValue, checkboxValue)
      onSuccess()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='form-container'>
      {error && (
        <div className='form__error-banner'>
          <span className='form__error-icon'>⚠️</span>
          <span className='form__error-text'>{error}</span>
        </div>
      )}

      <form className='form' onSubmit={handleSubmit} noValidate>
        <div className='form__group'>
          <label className='form__label' htmlFor={firstInput}>
            {firstInput}
          </label>
          <div className='form__input-wrapper'>
            <span className='form__input-icon'>📧</span>
            <input
              type='email'
              id={firstInput}
              value={firstInputValue}
              onChange={(e) => setFirstInputValue(e.target.value)}
              className={`form__input ${fieldErrors.firstInput ? 'form__input--error' : ''} ${firstInputValue ? 'form__input--filled' : ''}`}
              placeholder='Enter your email'
              required
              autoComplete='email'
            />
          </div>
          {fieldErrors.firstInput && (
            <span className='form__field-error'>{fieldErrors.firstInput}</span>
          )}
        </div>

        <div className='form__group'>
          <label className='form__label' htmlFor={secondInput}>
            {secondInput}
          </label>
          <div className='form__input-wrapper'>
            <span className='form__input-icon'>🔒</span>
            <input
              type={showPassword ? 'text' : 'password'}
              id={secondInput}
              value={secondInputValue}
              onChange={(e) => setSecondInputValue(e.target.value)}
              className={`form__input ${fieldErrors.secondInput ? 'form__input--error' : ''} ${secondInputValue ? 'form__input--filled' : ''}`}
              placeholder='Enter your password'
              required
              autoComplete='current-password'
            />
            <button
              type='button'
              className='form__toggle-password'
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          {fieldErrors.secondInput && (
            <span className='form__field-error'>{fieldErrors.secondInput}</span>
          )}
        </div>

        <div className='form__options'>
          <label className='form__checkbox'>
            <input
              type='checkbox'
              id={checkbox}
              checked={checkboxValue}
              onChange={(e) => setCheckboxValue(e.target.checked)}
              className='form__checkbox-input'
            />
            <span className='form__checkbox-mark'></span>
            <span className='form__checkbox-text'>Remember me</span>
          </label>
          <a href='#' className='form__forgot-link'>
            Forgot password?
          </a>
        </div>

        <button 
          className={`form__submit ${isLoading ? 'form__submit--loading' : ''}`} 
          type='submit'
          disabled={isLoading || !firstInputValue || !secondInputValue}
        >
          {isLoading ? (
            <>
              <span className='form__loading-spinner'></span>
              Signing in...
            </>
          ) : (
            <>
              Sign In
              <span className='form__submit-icon'>→</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}

Form.propTypes = {
  firstInput: PropTypes.string.isRequired,
  secondInput: PropTypes.string.isRequired,
  checkbox: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  error: PropTypes.string,
}
