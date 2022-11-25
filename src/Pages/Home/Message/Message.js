import React from 'react';
import slide1 from '../../../assets/images/slide1.png';

const Message = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={slide1} alt='' />
          <div>
            <h1 className="text-5xl font-bold">Hello Bike Lovers!</h1>
            <p className="py-6">Guys, we all know that nowadays a bike is not only a hobby but also a necessity for everyone. But with the all staffs the price of the bike is increasing day by day. So we are tring to collect bike from all around the country and restore them properly. If you are willing to purchase a reconditioned bike you can visit our website.</p>
            <button className="btn btn-primary">See All</button>
          </div>
        </div>
      </div>
    );
};

export default Message;