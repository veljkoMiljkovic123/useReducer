import { useDispatch } from "react-redux";
import "./App.css";
import { handleAllProductAction, handleSingleProductAction } from "./store/productSlice";
import ShowInfo from "./components/ShowInfo";
import { NavLink, Outlet } from "react-router-dom";
import React, { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(handleSingleProductAction({
      title:'Tihomir je car',
      desc:'Bingo Redux',
      price:'$9999'
    }))
  },[])

  function handleInfo() {
    dispatch(handleAllProductAction("Tihomit je ovde"));
  }

  return (
    <div className="flex flex-col items-center justify-between">
      <h1 className="">REDUX TOOLKIT</h1>
      
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/products'}>Products</NavLink></li>
      </ul>

     <Outlet />
    </div>
  );
}

export default App;
