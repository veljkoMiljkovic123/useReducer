
import { useEffect, useReducer } from 'react'
import './App.css'
import ProductsService from './services/productsService'
import { INITIAL_STATE, productsReducer } from './store/productsReducer'

function App() {

  const [state,dispach] = useReducer(productsReducer,INITIAL_STATE)


 
  function handleData(){
      //fetch start
      dispach({type:'FETCH_START'})
      ProductsService.getAllProducts()
      .then(res=>dispach({type:'FETCH_SUCCESS',data: res.data.products}))
      .catch(err=>dispach({type:'FETCH_ERROR'}))
  }
if(state.error){
  return <h2>Imas gresku</h2>
}
  return (
    <>
     <button onClick={handleData}>Fetch Data</button>

     {state.isLoading?(<h2>Loading....</h2>):(<>{state.products.map((el,i)=>{
      return <div key={i}>
        <h2>{el.title}</h2>
        <img src={el.thumbnail} alt="" />
      </div>
     })}</>)}
    </>
  )
}

export default App
