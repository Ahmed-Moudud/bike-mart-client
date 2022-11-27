import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import ProductCard from '../../ProductCard/ProductCard';
import Loading from '../../Shared/Loading/Loading';

const Advertisement = () => {   
    const [selectedProduct, setSelectedProduct] = useState(null);

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
     <div>
        <h2 className='text-5xl text-white font-bolder text-center my-10'>Available bikes</h2>
           <div className='grid gap-2 grid-cols-1 lg:grid-cols-3 w-5/6 mx-auto'>
           {
            products.map(product => <ProductCard
            key={product._id}
            product= {product}           
            setSelectedProduct={setSelectedProduct}
            ></ProductCard>)
           }
        </div>
        { selectedProduct && 
            <BookingModal
            selectedProduct= {selectedProduct}
            setSelectedProduct={setSelectedProduct}
            refetch={refetch}
            ></BookingModal>
        }

     </div>
    );
};

export default Advertisement;