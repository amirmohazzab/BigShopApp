import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import Slider from '../components/mainpage/Slider'
import Category from '../components/mainpage/Category'
import Offer from '../components/mainpage/Offer';
import Off from '../components/mainpage/Off';
import Productone from '../components/mainpage/Productone';
import Producttwo from '../components/mainpage/Producttwo';



const Main = () => {
    return ( 
        <ScrollView>
            <Slider />
            <Category />
            <Offer />
            <Off />
            <Productone />
            <Producttwo />
        </ScrollView>
     );
}
 
export default Main;