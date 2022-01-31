import { types } from "../types/types";

// const state = {
//     name: 'Emmanuel',
//     logged: true
// }

// const loginAction = {
//     type: types.login,
//     payload: {
//         name: 'emmanuel',
//         email: 'dflkj@lskdj.com'
//     }
// }

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }
}