import React from 'react'
import {View,Text,StyleSheet,FlatList,Image,Dimensions} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Ripple from 'react-native-material-ripple'
import {product_list} from '../../data/dataArray'


const w = Dimensions.get('window').width;

const Producttwo = () => {

    const {navigate} = useNavigation();

    return(
        <View>
            <View style={styles.head}>
                <Text style={styles.head_left}>
                    Total
                </Text>
                <Text style={styles.head_right}>
                    Top product
                </Text>
            </View>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={product_list}
                renderItem={({item,index})=>
                    <Ripple style={styles.box} onPress={() => navigate('Product')}>
                        <View style={styles.view_img}>
                            <Image 
                                style={styles.img}
                                source={item.img}
                            />
                        </View>
                        <View style={styles.info}>

                            <View style={{paddingVertical: 8, paddingLeft: 5}}>
                                <Text style={{fontSize: 16, color: '#333' }}>
                                    {item.pname}
                                </Text>
                            </View>
                            <View style={styles.separator}/>
                            <View style={{ paddingVertical: 7, paddingRight: 5}}>
                                <Text style={{color: '#14dc17', textAlign: 'right', fontSize: 16}}>
                                    {item.price} Euro
                                </Text>
                            </View>
                        </View>
                    </Ripple>
                }
            />
            {/* <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={product_list}
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
            /> */}
        </View>
    )
}

export default Producttwo;

const styles = StyleSheet.create({
    head:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    head_left:{
        color:'#0052cc',
        fontSize:14,
    },
    head_right:{
        fontSize:14,
        color:'#666',
        fontWeight:'bold',
    },

    box:{
        backgroundColor:'#fff',
        flexDirection:'column',
        width:w/2.8,
        height:w/1.6,
        marginHorizontal:5,
        marginBottom:10,
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
        height:'100%',
        resizeMode:'contain'
    },
    separator: {
        backgroundColor: '#eee', 
        width: "100%", 
        height: 1, 
    }, 
    info: {
        width: "100%",
        height: '30%',        
    }
    // box:{
    //     backgroundColor:'#fff',
    //     flexDirection:'column',
    //     width:w/2.8,
    //     height:w/1.6,
    //     marginHorizontal:5,
    //     marginBottom:8,
    //     borderRadius:2,
    //     borderColor:'#ddd',
    //     borderWidth:0.5
    // },
    // view_img:{
    //     width:'100%',
    //     height:'65%',
    //     alignItems:'center',
    //     justifyContent:'center'
    // },
    // img:{
    //     width:'90%',
    //     height:'90%',
    //     resizeMode:'contain'
    // },
    // separator: {
    //     backgroundColor: 'black', 
    //     width: "70%", 
    //     height: 1, 
    //     marginBottom: 5, 
    //     marginTop: 7
    // }, 
    // info: {
    //     marginTop: 10, 
    //     width: "100%", 
    //     alignItems: "center", 
    //     justifyContent: "center",
    // }
})

