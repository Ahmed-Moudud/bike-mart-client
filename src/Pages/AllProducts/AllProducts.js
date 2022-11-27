import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Shared/Loading/Loading';

const AllProducts = () => {
    const {data: allProducts = [], refetch, isLoading} = useQuery({
        queryKey: ['allProducts'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/allproducts');
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 w-5/6 mx-auto'>
            {
                allProducts.map(product => <ProductCard
                key={product._id}
                product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default AllProducts;