import API from '../../API';
import { signinAction, signoutAction, signupAction } from './actions';
import { push } from 'connected-react-router';
const api = new API();
const LOGIN_USER_KEY = 'HIVE_LOGIN_USER_KEY';
export const fetchUserFromLocalStorage = () => {
    return async dispatch => {
        const userJSON = localStorage.getItem(LOGIN_USER_KEY);
        if (userJSON && userJSON.token !== '') {
            dispatch(signinAction(JSON.parse(userJSON)));
        }
    };
};

export const signUp = (user_name, email, password) => {
    return async dispatch => {
        // Validation
        if (user_name === '' || email === '' || password === '') {
            alert('Please fill out name, email, and password.');
            return false;
        }
        return api
            .signUp(user_name, email, password)
            .then(user => {
                dispatch(signupAction(user));
                localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
                dispatch(push('/'));
            })
            .catch(error => {
                alert('Failed to connect API to add a User');
                console.log(error);
            });
    };
};
export const signIn = (email, password) => {
    return async dispatch => {
        // Validation
        if (email === '' || password === '') {
            alert('Please fill out email and password.');
            return false;
        }
        return api
            .signIn(email, password)
            .then(user => {
                dispatch(signinAction(user));
                localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
                dispatch(push('/'));
            })
            .catch(error => {
                alert('Invalid Username or Password');
                console.log(error);
            });
    };
};
export const signOut = () => {
    return async dispatch => {
        dispatch(signoutAction());
        localStorage.removeItem(LOGIN_USER_KEY);
        dispatch(push('/'));
    };
};
