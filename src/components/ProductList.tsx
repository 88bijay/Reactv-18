import React, { useEffect, useState } from 'react'

const ProductList = () => {
 const [products, setProducts] = useState<string[]>([]);

useEffect(()=>{
    console.log('fetching products');
    setProducts(['clothing','Household']);
},[])

  return (
    <div>ProductListn</div>
  )
}

export default ProductList
