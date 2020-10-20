import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROLES from '../../../Constants/roles';
import * as ROUTES from '../../../Constants/routes';
import { withFirebase } from '../Firebase';

const SignUpPage = () => (
  <main className='pa4 black-80 measure center'>
    <legend className='f4 fw6 ph0 mh0'>Sign Up</legend>
    <SignUpForm />
  </main>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username, email, passwordOne, isAdmin,
    } = this.state;
    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) =>
        // Create a user in your Firebase realtime database
        this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          roles,
        }))
      .then(() => this.props.firebase.doSendEmailVerification())
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo
      || passwordOne === ''
      || email === ''
      || username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
          <div className='mt3'>
            <input
              name='username'
              value={username}
              onChange={this.onChange}
              type='text'
              placeholder='Full Name'
              className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
            />
          </div>
          <div className='mt3'>
            <input
              name='email'
              value={email}
              onChange={this.onChange}
              type='text'
              placeholder='Email Address'
              className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
            />
          </div>
          <div className='mt3'>
            <input
              name='passwordOne'
              value={passwordOne}
              onChange={this.onChange}
              type='password'
              placeholder='Password'
              className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
            />
          </div>
          <div className='mt3'>
            <input
              name='passwordTwo'
              value={passwordTwo}
              onChange={this.onChange}
              type='password'
              placeholder='Confirm Password'
              className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
            />
          </div>
          <div className='mt3'>
            <label className='db fw6 lh-copy f6'>
              Admin:
              <input
                name='isAdmin'
                type='checkbox'
                checked={isAdmin}
                onChange={this.onChangeCheckbox}
              />
            </label>
          </div>
          <div className='lh-copy mt3'>
            <button disabled={isInvalid} type='submit'>
              Sign Up
            </button>
          </div>

          {error && <p>{error.message}</p>}
        </fieldset>
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account?
    {' '}
    <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
