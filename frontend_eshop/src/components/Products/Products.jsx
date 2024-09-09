import React from 'react'
import Heading from "../Shared/Heading";
import ProductCard from './ProductCard';

//images import 
import Img1 from "../../assets/product/p-1.jpg"
import Img2 from "../../assets/product/p-2.jpg"
import Img3 from "../../assets/product/p-3.jpg"
import Img4 from "../../assets/product/p-4.jpg"
import Img5 from "../../assets/product/p-5.jpg"
import Img7 from "../../assets/product/p-7.jpg"
import Img9 from "../../assets/product/p-9.jpg"
const ProductsData = [

    {
        id:1,
        img:Img1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },

    {
        id:2,
        img:Img2,
        title: "Rocky Mountain",
        price: "140",
        aosDelay: "200",
    },
    {
        id:3,
        img:Img3,
        title: "Googles",
        price: "920",
        aosDelay: "400",
    },
    {
        id:4,
        img:Img4,
        title: "Printed",
        price: "920",
        aosDelay: "600",
    },
    {
        id:5,
        img:Img5,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id:6,
        img:Img7,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id:6,
        img:Img9,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
]


const Products = () => {
  return (
    <div>

<div className='container'>
    {/* Header section */}
    <Heading title= "Our Products"
    subtitle={"Exploring Our Products"}
    />

    {/* Body section */}
    <ProductCard data={ProductsData}/>

</div>

    </div>
  )
}

export default Products