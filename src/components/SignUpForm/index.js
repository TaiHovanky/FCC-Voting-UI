import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'react-md';

const SignUpForm = ({
    password,
    saveNewUser,
    username
}) => (
    <form>
        <TextField
            label="Username"
            value={username}
        />
        <TextField
            label="Password"
            value={password}
        />
    </form>
);

SignUpForm.propTypes = {
    password: '',
    saveNewUser: () => {},
    username: ''
}

export default SignUpForm;
