import React, { useState, useEffect } from 'react';
import styles from './PasswordChecker.module.css';

const PasswordChecker = () => {
  const [canShowPassword, setCanShowPassword] = useState(true);
  const [passwordValue, setPasswordValue] = useState('');
  const [hasLength, setHasLength] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);

  const onPasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const onShowHideClick = (event) => {
    event.preventDefault();
    setCanShowPassword((oldValue) => !oldValue);
    console.log(canShowPassword);
  };

  useEffect(() => {
    console.log('Running use Effect');
    passwordValue.match('(?=.*[A-Z])')
      ? setHasUppercase(true)
      : setHasUppercase(false);

    passwordValue.match('(?=.*[a-z])')
      ? setHasLowercase(true)
      : setHasLowercase(false);

    passwordValue.match('(?=.*[0-9])')
      ? setHasNumber(true)
      : setHasNumber(false);

    passwordValue.match('(?=.*[-+_!@#$%^&*.,?])')
      ? setHasSpecialCharacter(true)
      : setHasSpecialCharacter(false);

    passwordValue.length > 11 && passwordValue.length < 33
      ? setHasLength(true)
      : setHasLength(false);
  }, [passwordValue]);

  return (
    <div className={styles['password-checker-container']}>
      <h2>Check your password strength</h2>
      <p className={styles['password-message']}>
        This widget will allow you to check if your password is strong enough.
        This widget doesn't save any information, everything runs locally
      </p>
      <section className={styles['password-checker-section']}>
        <div className={styles['password-input-container']}>
          <label for='password-field'>Enter your tentative password:</label>
          <div className={styles['password-input-inner']}>
            <input
              id='password-field'
              type={canShowPassword ? 'text' : 'password'}
              onChange={onPasswordChange}
              value={passwordValue}></input>
            <button
              className={styles['password-checker-btn']}
              onClick={onShowHideClick}>
              <img
                src={canShowPassword ? '/img/eye-slash.svg' : '/img/eye.svg'}
                alt='Button to show and hide the tentative password'
              />
            </button>
          </div>
        </div>
        <ul className={styles['password-criteria-list']}>
          <li
            className={`${
              hasLength
                ? styles['password-requirement-pass']
                : styles['password-requirement-fail']
            }`}>
            Password is between 12 and 32 characters
          </li>
          <li
            className={`${
              hasUppercase
                ? styles['password-requirement-pass']
                : styles['password-requirement-fail']
            }`}>
            Contains at least 1 uppercase letter
          </li>
          <li
            className={`${
              hasLowercase
                ? styles['password-requirement-pass']
                : styles['password-requirement-fail']
            }`}>
            Contains at least 1 lowercase letter
          </li>
          <li
            className={`${
              hasNumber
                ? styles['password-requirement-pass']
                : styles['password-requirement-fail']
            }`}>
            Contains at least 1 number
          </li>
          <li
            className={`${
              hasSpecialCharacter
                ? styles['password-requirement-pass']
                : styles['password-requirement-fail']
            }`}>
            Contains at least 1 special character
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PasswordChecker;
