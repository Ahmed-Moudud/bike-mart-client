import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import Loading from '../../Shared/Loading/Loading';

const Advertisement = () => {   

    const {data: products = [], refetch, isLoadign} = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })
    
    if(isLoadign){
        return <Loading></Loading>
    }
   
    return (
        <div className='grid gap-2 grid-cols-1 lg:grid-cols-3 mx-auto'>
           {
            products.map(product => <ProductCard
            key={product._id}
            product= {product}
            ></ProductCard>)
           }
        </div>
    );
};

export default Advertisement;