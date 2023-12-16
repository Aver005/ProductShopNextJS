'use client'

import { useEffect, useState } from 'react';

import Loader from '../Loader';
import Product from './Product';

import style from '@css/components/Catalog.module.css'


const Catalog = () => 
{
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => 
    {
        fetch('/api/products/get')
        .then((res) => res.json())
        .then((data) => 
        {
            setProducts(data);
            setLoading(false);
        })
    }, []);

    return (
        !loading ?
        (
            <div className={style.Catalog}>
                {products.map((product) => <Product data={product} />)}
            </div>
        )
        :
        (
            <Loader />
        )
    );
}

export default Catalog;