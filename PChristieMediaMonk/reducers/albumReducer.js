const initialState = {
    albums:{},
    albumsFulfilled: false,
};

export default function albums(state = initialState, action) {
    switch (action.type) {
        case 'ALBUMS_FULFILLED' :
            return {
                ...state,
                albums: action.payload,
                albumsFulfilled: true,   
            }
        case 'ALBUMS_REJECTED' :
            return {
                ...state,
                albumsError: action.payload,   
            }
        case 'persist/REHYDRATE' :
            if(!action.payload.album){
                return {
                 albums:{},
                 albumsFulfilled: false,
                }
            }
            return {
                ...state,
                //persistedState: action.payload,
                albums: action.payload.album.albums,
                albumsFulfilled: action.payload.album.albumsFulfilled,  
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