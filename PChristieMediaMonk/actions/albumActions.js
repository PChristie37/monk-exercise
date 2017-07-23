const api = 'https://jsonplaceholder.typicode.com';

/* Fetches Photos from jsonplaceholder and dispatches to reducers */
export function getAlbums() {  
   return function(dispatch, getState){
    return fetch(api + '/photos', { 
       method: 'GET',
     })
     .then((response) => response.json())
     .then((responseData) => {
      console.log(responseData);
      dispatch({type: "ALBUMS_FULFILLED", payload: responseData})

      /* TODO: Add error verification */
        // if(responseData.error){
        //     dispatch({type: "ACTIVE_BRANDS_REJECTED", payload: responseData})
        // }else{
        //     dispatch({type: "ACTIVE_BRANDS_FULFILLED", payload: responseData})
        // }
    })
  };
};




