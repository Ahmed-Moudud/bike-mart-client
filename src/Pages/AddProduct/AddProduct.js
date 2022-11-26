import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);
    const imageHostKey =process.env.REACT_APP_imgbb_key
    console.log(user);

    const defaultValues = {             
        email: user?.email
      };


    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                const product = {
                    productName: data.productName,
                    buyingPrice: data.buyingPrice,
                    sellingPrice: data.sellingPrice,
                    condition: data.condition,
                    mobileNumber: data.mobileNumber,
                    location: data.location,
                    category:data.category,
                    description:data.description,
                    yearOfPurchase:data.yearOfPurchase,
                    sellerName: data.sellerName,
                    postedTime: data.postedTime,
                    image:imgData.data.url,
                    email: data.email,
                    category_id: data.category_id
                }

                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result => {
                    toast.success(`${data.productName} is added successfully`)
                })
            }
        })
    }

    return (
        <div className='w-96 p-7 mx-auto'>
        <h2 className="text-4xl">Add A Product</h2>
        <form className='' onSubmit={handleSubmit(handleAddProduct)}>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input type='text'
                    {...register("productName", {
                        required: "Product Name is required"
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Buying Price</span>
                </label>
                <input type='number'
                    {...register("buyingPrice", {
                        required: "BuyingPrice is required"
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.buyingPrice && <p className='text-red-500'>{errors.buyingPrice.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Slling Price</span>
                </label>
                <input type='number'
                    {...register("sellingPrice", {
                        required: "Selling Price is required"
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.sellingPrice && <p className='text-red-500'>{errors.sellingPrice.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Condition</span>
                </label>
                <input type='text'
                    {...register("condition", {
                        required: "This Field is required"
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Your MobileNumber</span>
                </label>
                <input type='number'
                    {...register("mobileNumber", {
                        required: "This Field is required"
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.mobileNumber && <p className='text-red-500'>{errors.mobileNumber.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Your Location</span>
                </label>
                <input type='text'
                    {...register("location", {
                        required: "This Field is required"
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Product Description</span>
                </label>
                <input type='text'
                    {...register("description", {
                        required: "This Field is required"
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Year of Purchase</span>
                </label>
                <input type='text'
                    {...register("yearOfPurchase", {
                        required: "This Field is required"
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.yearOfPurchase && <p className='text-red-500'>{errors.yearOfPurchase.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Seller Name</span>
                </label>
                <input type='text'                    
                    {...register("sellerName", {
                        required: "This Field is required"
                        
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Posted Time</span>
                </label>
                <input type='text'
                    {...register("postedTime", {
                        required: "This Field is required"
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.postedTime && <p className='text-red-500'>{errors.postedTime.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Category Id</span>
                </label>
                <input type='number'
                    {...register("category_id", {
                        required: "This Field is required"
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.category_id && <p className='text-red-500'>{errors.category_id.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type='email'
                    defaultValue={defaultValues.email}
                    {...register("email", {
                        required: true
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
              
                <input
                  {...register('category')}                    
                className="select select-bordered w-full max-w-xs"> 
                </input>

            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Product Image</span>
                </label>
                <input type='file'
                    {...register("image", {
                        required: "Photo is required"
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
            </div>

            <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />

        </form>
    </div>
    );
};

export default AddProduct;