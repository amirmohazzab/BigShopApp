import React from 'react'
import {ScrollView, View} from 'react-native'
import Slider from '../components/productpage/Slider';
import ShareInfo from '../components/productpage/ShareInfo';
import Buttons from '../components/productpage/Buttons';
import Garranty from '../components/productpage/Garranty';
import Disc from '../components/productpage/Disc';
import Rating from '../components/productpage/Rating';
import Category from '../components/productpage/Category';
import Pro_similar from '../components/productpage/Pro_similar';
import Pro_other_by from '../components/productpage/Pro_other_by';



const Product = () => {
    return ( 
        <ScrollView style={{backgroundColor: '#eee'}}>
            <Slider />
            <ShareInfo />
            <View style={{marginHorizontal: 20}}>
                <Buttons />
                <Garranty />
                <Disc />
                <Rating />
            </View>
            <Category />
            <Pro_similar />
            <Pro_other_by />
        </ScrollView>
     );
}
 
export default Product;