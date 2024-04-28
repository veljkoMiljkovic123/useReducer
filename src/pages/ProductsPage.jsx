import React from 'react'
import { useSelector } from 'react-redux'

function ProductsPage() {
    const {singleProduct} = useSelector((state) => state.productStore)
  return (
    <div>
        <h2>{singleProduct.title}</h2>
        <h4>{singleProduct.desc}</h4>
        <p>{singleProduct.price}</p>
    </div>
  )
}

export default ProductsPage