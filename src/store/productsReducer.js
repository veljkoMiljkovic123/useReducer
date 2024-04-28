export const INITIAL_STATE = {
  isLoading: false,
  error: false,
  products: [],
};

export const productsReducer = (state, action) => {
    console.log(action);
  if (action.type === "FETCH_START"){
    return {
      isLoading: true,
      error: false,
      products: [],
    }
}else if(action.type === "FETCH_SUCCESS"){
    return {
        isLoading:false,
        error:false,
        products:action.data
    }
}else if(action.type==='FETCH_ERROR'){
    return {
        isLoading:false,
        error:true,
        products:[]
    }
}
}
