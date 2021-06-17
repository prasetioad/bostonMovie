const initialState = {
    firstName: null,
    lastName: null,
    jobDesc: [],
    gender: null,
    email: null,
    laptop: null,
    address: null,
    phone: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIRSTNAME':
            console.log(state);
            return {
                ...state,
                firstName: action.payload
            }
        case 'LASTNAME':
            console.log(state);
            return {
                ...state,
                lastName: action.payload
            }
        case 'JOBDESC':
            console.log(state);
            return {
                ...state,
                jobDesc: [action.payload, ...state.jobDesc]
            }
        case 'GENDER':
            console.log(state);
            return {
                ...state,
                gender: action.payload
            }
        case 'EMAIL':
            console.log(state);
            return {
                ...state,
                email: action.payload
            }
        case 'LAPTOP':
            console.log(state);
            return {
                ...state,
                laptop: action.payload
            }
        case 'ADDRESS':
            console.log(state);
            return {
                ...state,
                address: action.payload
            }
        case 'PHONE':
            console.log(state);
            return {
                ...state,
                phone: action.payload
            }
        default:
            return state;
    }
}