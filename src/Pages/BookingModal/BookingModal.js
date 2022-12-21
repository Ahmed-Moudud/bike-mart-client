import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
// import { AuthContext } from '../../contexts/AuthProvider';



const BookingModal = ({ selectedProduct, setSelectedProduct, refetch }) => {
   const {user} = useContext(AuthContext)

    // console.log(user);


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const name = form.name.value;
        const sellingPrice = form.sellingPrice.value;
        const meetingPlace = form.meetingPlace.value;
        // console.log(user);

        const booking = {
            productName,
            email,
            phone,
            name,
            sellingPrice,
            meetingPlace
        }

        fetch('https://bike-mart-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setSelectedProduct(null)
                    toast.success('Booking successful')
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })

        setSelectedProduct(null)

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{selectedProduct.productName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" name='productName' defaultValue={selectedProduct.productName} disabled className="input w-full input-bordered" />
                        <input type="text" name='sellingPrice' defaultValue={selectedProduct.sellingPrice} disabled className="input w-full input-bordered" />

                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="" className="input w-full input-bordered" />
                        <input name='meetingPlace' type="text" placeholder="Meeting Place" className="input w-full input-bordered" />
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