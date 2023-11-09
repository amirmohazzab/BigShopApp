import React from 'react'
import {View,Text,StyleSheet,FlatList,Image,Dimensions} from 'react-native'
import {product_list} from '../../data/dataArray'
import Ripple from 'react-native-material-ripple'
import { category_item } from '../../data/dataArray'


const w = Dimensions.get('window').width;

const Product2 = () => {
    return(
        <View>
            <View style={styles.head}>
                <Text style={styles.head_right}>
                    Newest products
                </Text>
            </View>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={category_item}
                renderItem={({item,index})=>
                    <Ripple style={styles.box} >
                        <View style={styles.view_img}>
                            <Image 
                                style={styles.img}
                                source={item.img}
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={{fontSize: 18}}>
                                {item.pname}
                            </Text>
                            <View style={styles.separator}/>
                            <Text style={{color: '#14dc17'}}>
                                {item.price} Euro
                            </Text>
                        </View>
                    </Ripple>
                }
            />
        </View>
    )
}

export default Product2;

const styles = StyleSheet.create({
    head:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        padding:10
    },
    head_right:{
        fontSize:16,
        color:'#666',
        fontWeight:'bold',
    },
    box:{
        backgroundColor:'#fff',
        flexDirection:'column',
        width:w/2.8,
        height:w/1.6,
        marginHorizontal:5,
        marginBottom:8,
        borderRadius:2,
        borderColor:'#ddd',
        borderWidth:0.5
    },
    view_img:{
        width:'100%',
        height:'65%',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        width:'90%',
        height:'90%',
        resizeMode:'contain'
    },
    separator: {
        backgroundColor: 'black', 
        width: "70%", 
        height: 1, 
        marginBottom: 5, 
        marginTop: 7
    }, 
    info: {
        marginTop: 10, 
        width: "100%", 
        alignItems: "center", 
        justifyContent: "center",
    }
})

