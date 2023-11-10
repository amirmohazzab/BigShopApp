import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import ShopBox from '../components/CartPage/ShopBox';



const Cart = () => {
    return ( 
        <ScrollView style={{backgroundColor: '#f3f3f3'}}>
            <ShopBox />
            
           
        </ScrollView>
     );
}
 
export default Cart;