import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const email= user.email;
    const { data: sellerproducts = [] } = useQuery({
        queryKey: ['sellerproducts'],
        queryFn: async () => {
            const res = await fetch(`https://bike-mart-server.vercel.app/allproducts/${email}`);
            const data = await res.json();
            console.log(sellerproducts);
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-3xl my-5'>My Products</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Selling Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellerproducts.map((sellerproduct, i) => <tr key={sellerproduct._id}>
                                <th>{i + 1}</th>
                                <td>{sellerproduct.productName}</td>
                                <td>{sellerproduct.sellingPrice}</td>
                                <td></td>
                                <td><button className='btn btn-ghost'>Delete</button>/<button className='btn btn-ghost'>Advertise</button></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;