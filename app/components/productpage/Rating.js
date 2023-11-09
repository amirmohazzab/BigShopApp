import React from 'react'
import {View, StyleSheet, Dimensions, Text} from 'react-native'
import Stars from 'react-native-stars'



const w = Dimensions.get('window').width

const Rating = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.sec1}>
                <Stars
                    half={true}
                    default={2.5}
                    //update={(val)=>{this.setState({stars: val})}}
                    spacing={4}
                    starSizeH={20}
                    starSizeW={20}
                    count={5}
                    fullStar={require('../../../assets/rating/full_star.png')}
                    emptyStar={require('../../../assets/rating/empty_star.png')}
                    halfStar={require('../../../assets/rating/half_star.png')} 
                />
                <Text style={{fontSize: 12, marginLeft: 3}}>
                    4.3 out of 5
                </Text>
                <Text style={{fontSize: 10, color: '#bbb', marginLeft: 3}}>
                    from 1900 registered votes
                </Text>
            </View>
            <View style={styles.sec2}>
                <View style={styles.sec2_part}>
                    <Stars
                        half={true}
                        default={4.5}
                        spacing={2}
                        starSizeH={7}
                        starSizeW={35}
                        count={5}
                        fullStar={require('../../../assets/rating/full_sq.png')}
                        emptyStar={require('../../../assets/rating/empty_sq.png')}
                        halfStar={require('../../../assets/rating/half_sq.png')} 
                    />
                    <Text style={{fontSize: 12, color: '#bbb'}}>
                        Produce quality
                    </Text>
                </View>
                <View style={styles.sec2_part}>
                    <Stars
                        half={true}
                        default={4.5}
                        spacing={2}
                        starSizeH={7}
                        starSizeW={35}
                        count={5}
                        fullStar={require('../../../assets/rating/full_sq.png')}
                        emptyStar={require('../../../assets/rating/empty_sq.png')}
                        halfStar={require('../../../assets/rating/half_sq.png')} 
                    />
                    <Text style={{fontSize: 12, color: '#bbb'}}>
                        value of perchase to price 
                    </Text>
                </View>
                <View style={styles.sec2_part}>
                    <Stars
                        half={true}
                        default={4.5}
                        spacing={2}
                        starSizeH={7}
                        starSizeW={35}
                        count={5}
                        fullStar={require('../../../assets/rating/full_sq.png')}
                        emptyStar={require('../../../assets/rating/empty_sq.png')}
                        halfStar={require('../../../assets/rating/half_sq.png')} 
                    />
                    <Text style={{fontSize: 12, color: '#bbb'}}>
                        innovation
                    </Text>
                </View>
                <View style={styles.sec2_part}>
                    <Stars
                        half={true}
                        default={4.5}
                        spacing={2}
                        starSizeH={7}
                        starSizeW={35}
                        count={5}
                        fullStar={require('../../../assets/rating/full_sq.png')}
                        emptyStar={require('../../../assets/rating/empty_sq.png')}
                        halfStar={require('../../../assets/rating/half_sq.png')} 
                    />
                    <Text style={{fontSize: 12, color: '#bbb'}}>
                        sufficiency
                    </Text>
                </View>
                <View style={styles.sec2_part}>
                    <Stars
                        half={true}
                        default={4.5}
                        spacing={2}
                        starSizeH={7}
                        starSizeW={35}
                        count={5}
                        fullStar={require('../../../assets/rating/full_sq.png')}
                        emptyStar={require('../../../assets/rating/empty_sq.png')}
                        halfStar={require('../../../assets/rating/half_sq.png')} 
                    />
                    <Text style={{fontSize: 12, color: '#bbb'}}>
                        facility usage
                    </Text>
                </View>
                <View style={styles.sec2_part}>
                    <Stars
                        half={true}
                        default={4.5}
                        spacing={2}
                        starSizeH={7}
                        starSizeW={35}
                        count={5}
                        fullStar={require('../../../assets/rating/full_sq.png')}
                        emptyStar={require('../../../assets/rating/empty_sq.png')}
                        halfStar={require('../../../assets/rating/half_sq.png')} 
                    />
                    <Text style={{fontSize: 12, color: '#bbb'}}>
                        design and appearance
                    </Text>
                </View>
            </View>
          
        </View>
     );
}
 
export default Rating;


const styles = StyleSheet.create({
  container:{
    width: null,
    height: null,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    padding: 5,
    elevation: 2,
    marginBottom: 10
  },
  sec1: {
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sec2: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  sec2_part: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 8
} 
  
})
