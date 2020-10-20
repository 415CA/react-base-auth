import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../Constants/routes';
import { withFirebase } from '../Firebase';

const PasswordForgetPage = () => (
  <main className='pa4 black-80 measure center'>
    <legend className='f4 fw6 ph0 mh0'>Password Forget</legend>
    <PasswordForgetForm />
  </main>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit} className='measure center'>
        <div className='mt3'>
          <input
            name='email'
            value={this.state.email}
            onChange={this.onChange}
            type='text'
            placeholder='Email Address'
            className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
          />
        </div>
        <div className='lh-copy mt3'>
          <button disabled={isInvalid} type='submit'>
            Reset My Password
          </button>
        </div>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
