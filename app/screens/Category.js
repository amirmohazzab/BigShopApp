import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import Product1 from '../components/categorypage/Product1';
import Product2 from '../components/categorypage/Product2';
import Product3 from '../components/categorypage/Product3';



const Category = () => {
    return ( 
        <ScrollView>
            <Product1 />
            <Product2 />
            <Product3 />
        </ScrollView>
     );
}
 
export default Category;