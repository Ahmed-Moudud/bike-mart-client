import React from 'react';
import Categories from '../../Categories/Categories';
import Advertisement from '../Advertisement/Advertisement';
import Message from '../Message/Message';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Advertisement></Advertisement>
            <Message></Message>
            <Categories></Categories>
        </div>
    );
};

export default Home;