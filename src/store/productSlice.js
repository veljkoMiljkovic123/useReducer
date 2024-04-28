import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice(
    {
        name:'product',
        initialState:{
            isLoading: false,
            products:[],
            info:'',
            singleProduct:{}
        },
        reducers: {
            handleAllProductAction: (state,action) => {
                console.log(action.payload);
                state.info=action.payload
            },
            handleSingleProductAction: (state,action) => {
                console.log(action.payload);
                state.singleProduct = action.payload
            }
        }
    }
);

export const {handleAllProductAction,handleSingleProductAction} = productSlice.actions;
export default productSlice.reducer