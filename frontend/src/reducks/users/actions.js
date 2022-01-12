export const SIGN_UP = 'SIGN_UP';
export const signupAction = user => {
    return {
        type: 'SIGN_UP',
        payload: user
    };
};

export const SIGN_IN = 'SIGN_IN';
export const signinAction = user => {
    return {
        type: 'SIGN_IN',
        payload: user
    };
};

export const SIGN_OUT = 'SIGN_OUT';
export const signoutAction = user => {
    return {
        type: 'SIGN_IN',
        payload: {}
    };
};
