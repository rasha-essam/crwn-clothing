import React, { useState, useEffect } from 'react';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import './sign-up.styles.scss';
import {
  auth,
  createUserProfileDocument
} from './../../firebase/firebase.utils';

const SignUp = () => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userData;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    return function cleanup() {
      setUserData({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    };
  }, []);

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type="text"
          name="displayName"
          value={userData.displayName}
          required
          label="Display Name"
        />
        <FormInput
          handleChange={handleChange}
          type="email"
          name="email"
          value={userData.email}
          required
          label="Email"
        />
        <FormInput
          handleChange={handleChange}
          type="password"
          name="password"
          value={userData.password}
          required
          label="Password"
        />
        <FormInput
          handleChange={handleChange}
          type="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          required
          label="Confirm Password"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
