import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleAddProduct = data => {

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
                    {...register("name", {
                        required: "Name is required"
                    })}
                    className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type='email'
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
              
                <select
                  {...register('category')}                    
                className="select select-bordered w-full max-w-xs"> 
                </select>

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