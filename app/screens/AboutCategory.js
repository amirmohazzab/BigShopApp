import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import Constans from 'expo-constants';
import MyHeader from '../components/header/MyHeader';
import Productone from '../components/about_categorypage/Productone';
import Producttwo from '../components/about_categorypage/Producttwo';


const props = {
    head_name: 'Main',
    head_page_name: 'Tablet'
};


const AboutCategory = () => {
    return ( 
        <ScrollView>
            <MyHeader {...props} />
            <Productone />
            <Producttwo />
        </ScrollView>
     );
}
 
export default AboutCategory;