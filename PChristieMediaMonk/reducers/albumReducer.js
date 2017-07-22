const initialState = {
    albums:{}
};

export default function albums(state = initialState, action) {
    switch (action.type) {
        case 'ALBUMS_FULFILLED' :
            return {
                ...state,
                albums: action.payload,   
            }
        case 'ALBUMS_REJECTED' :
            return {
                ...state,
                albumsError: action.payload,   
            }
        case 'STORE_RESET' :
            return {
                ...state,
                albums:{},  
            }

        default:
            return state;
    }
};