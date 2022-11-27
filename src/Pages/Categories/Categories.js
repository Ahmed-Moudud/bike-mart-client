import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const {data: allProducts = [], refetch, isLoading} = useQuery({
        queryKey: ['allProducts'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='my-5'>
            <h2 className='text-5xl text-center font-bold my-10'>What kind of bike do you prefer?</h2>
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 w-5/6 mx-auto'>
           {
            allProducts.map(product => <CategoryCard
            key={product._id}
            product={product}
            ></CategoryCard>)
           }
        </div>
        </div>
    );
};

export default Categories;