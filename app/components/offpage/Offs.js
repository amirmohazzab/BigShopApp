import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import Ripple from 'react-native-material-ripple';
//import {styles} from 'react-native-material-ripple'
import { off_list } from '../../data/dataArray';


const Offs = () => {
    return ( 
        <View style={styles.container}>
            {
                off_list.map((item, key) => (
                    <Ripple style={styles.box} key={key}>
                        <View style={styles.box_image}>
                            <Image 
                                style={styles.box_image}
                                source={item.img}
                            />
                        </View>
                        <View style={{backgroundColor: '#f3f3f3', width: '100%', height: 5}} />
                        <View style={styles.info}>
                            <Text style={{color: 'red', marginBottom: 5, fontSize: 18}}>
                                {item.l_price}
                            </Text>
                            <Text style={{color: 'green', fontSize: 18}}>
                                {item.n_price}
                            </Text>
                        </View>
                    </Ripple>
                ))
            }
        </View>
     );
}
 
export default Offs;



const styles = StyleSheet.create({
    container: {
        flex:1,
    },
  box: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 15
  },
  box_image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:4
  },
  info: {
    alignItems: 'center',
    padding: 5
  }
})
