import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';



const BookingModal = ({selectedProduct, setSelectedProduct, refetch}) => {
    const {user} = useContext(AuthContext);

    console.log(selectedProduct, user);


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const email =form.email.value;
        const phone= form.phone.value;
        const name = form.name.value;

        const booking = {
            productName,
            email,
            phone,
            name
        }

      
        
    }

    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="font-bold text-lg">{selectedProduct.productName}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                    <input type="text" name='productName' defaultValue={selectedProduct.productName} className="input w-full input-bordered" />
                
                    <input name='name' type="text" defaultValue={user.displayName} disabled placeholder="" className="input w-full input-bordered" />
                    <input name='email' type="email" defaultValue={user?.email} disabled placeholder="" className="input w-full input-bordered" />
                    <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                    <br />
                    <input className='btn btn-accent w-full' type="submit" value="Submit" />
                </form>

            </div>
        </div>
    </>
    );
};

export default BookingModal;