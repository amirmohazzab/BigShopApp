import React from 'react'
import {View, Text, StyleSheet } from 'react-native';
import {FontAwesome, Entypo, SimpleLineIcons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';


const SideMenu = () => {

    const {navigate} = useNavigation();

    return ( 
        <View style={styles.container}>
            <View style={styles.head}>
                <FontAwesome name="user" size={24} color="black" style={styles.icon} />
                <Text style={styles.head_text} onPress={() => navigate('Login')}> Login and Register </Text>
            </View>
            <View style={styles.body}>
                <Ripple style={styles.body_btn} onPress={() => navigate('Main')}>
                    <Entypo name="home" style={styles.body_btn_icon} />
                    <Text style={styles.body_btn_text}> Home </Text>
                </Ripple>
                <Ripple style={styles.body_btn} onPress={() => navigate('CategoryNavigator')}>
                    <SimpleLineIcons name="list" style={styles.body_btn_icon} />
                    <Text style={styles.body_btn_text}> Product category list </Text>
                </Ripple>
                <Ripple style={[styles.body_btn, styles.border_top, {justifyContent: 'space-between'}]} onPress={() => navigate('Cart')}>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="cart" style={styles.body_btn_icon} />
                        <Text style={styles.body_btn_text}> Cart </Text>
                    </View>
                    <View>
                        <Text style={styles.cart_ci}> 0 </Text>
                    </View>
                </Ripple>
                <Ripple style={[styles.body_btn, styles.border_top]} onPress={() => navigate('Off')}>
                    <FontAwesome name="star" style={styles.body_btn_icon} />
                    <Text style={styles.body_btn_text}> Most soldout </Text>
                </Ripple>
                <Ripple style={styles.body_btn} onPress={() => navigate('Off')}>
                    <FontAwesome name="star" style={styles.body_btn_icon} />
                    <Text style={styles.body_btn_text}> Digikala special offer </Text>
                </Ripple>
                <Ripple style={styles.body_btn} onPress={() => navigate('Off')}>
                    <FontAwesome name="star" style={styles.body_btn_icon} />
                    <Text style={styles.body_btn_text}> Most visited </Text>
                </Ripple>
                <Ripple style={styles.body_btn} onPress={() => navigate('Off')}>
                    <FontAwesome name="star" style={styles.body_btn_icon} />
                    <Text style={styles.body_btn_text}> Newest </Text>
                </Ripple>
                <Ripple style={[styles.body_btn, styles.border_top]} onPress={() => navigate('Main')}>
                    <MaterialIcons name="settings" style={styles.body_btn_icon} />
                    <Text style={styles.body_btn_text}> Setting </Text>
                </Ripple>
                <Ripple style={styles.body_btn} onPress={() => navigate('Main')}>
                    <SimpleLineIcons name="question" style={styles.body_btn_icon} />
                    <Text style={styles.body_btn_text}> Frequently asked </Text>
                </Ripple>
                <Ripple style={styles.body_btn} onPress={() => navigate('Main')}>
                    <Entypo name="home" style={styles.body_btn_icon} />
                    <Text style={styles.body_btn_text}> About </Text>
                </Ripple>
            </View>
        </View>
     );
}
 
export default SideMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc'
    },
    head: {
        width: '100%',
        height: '10%',
        backgroundColor: '#ef394e',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        paddingLeft: 15,
        paddingBottom: 10
    },
    body: {
        width: '100%',
        height: '90%',
    },
    head_text: {
        marginTop: 30,
        fontSize: 16,
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        padding: 2,
        paddingVertical: 5

    },
    icon: {
        color: '#fff',
        fontSize: 18,
        padding: 5,
        paddingRight: 10
    },
    body_btn: {
        width: '100%',
        height: null,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    body_btn_text: {
        fontSize: 16,
        color: '#111',
        paddingLeft: 15
    },
    body_btn_icon: {
        fontSize: 20,
        color: '#666'
    },
    border_top: {
        borderTopWidth: 0.5,
        borderColor: '#555'
    },
    cart_ci: {
        padding: 2,
        paddingHorizontal: 5,
        backgroundColor: '#aaa',
        borderRadius: 10,
        fontSize: 15
    },
    row: {
        flexDirection: 'row', 
        alignItems: 'center'
    }
})

