import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchFromApi from "../utils/fetchFromApi";


import "./Product.css";
import ProductView from "../components/product/ProductView";

function Product() {
    const [productData, setProductData] = useState([]);
    const { productId } = useParams();

    useEffect(() => {
        async function getData() {
            let data = await fetchFromApi(`products/${productId}`);
            setProductData(data);
        }
        getData();
    }, [productId]);

    return (
        <main className="product-view_main container">
            <ProductView productData={productData} />
        </main>
    );
}

export default Product;
