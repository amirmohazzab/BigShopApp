import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Category2 from './screens/Category2';
import Content from './components/category_page/Content'
import { useNavigationState } from '@react-navigation/native';
import MyHeader from './components/header/MyHeader';

const TopTab = createMaterialTopTabNavigator();

let props = {
    head_name: 'CategoryNavigator',
    head_page_name: 'Product Categories'
}

const CategoryNavigator = () => {

    // const state = useNavigationState(state => state);
    // const index = useNavigationState(state => state.index);
    // const isFocused = state.index === index;
    //         // state.routes.map((route, index) => {
    //         // const isFocused = state.index === index;
    //         // }
    //         console.log("isFocused >>>>>", isFocused)
    //         console.log("index >>>>>", index)
   
    return ( 
        <> 
        <MyHeader {...props} />
                <TopTab.Navigator 
                    initialRouteName="Category"
                    backBehavior="none"
                    screenOptions={({route}) => ({
                        tabBarItemStyle : ({focused, color, size}) => ({
                            backgroundColor: "red",
                            borderBottomWidth: 3,
                            borderColor:  focused ? "green" : ""
                        }),
                        headerShown: false,
                        tabBarScrollEnabled: true,
                        tabBarActiveTintColor: "red",
                        tabBarInactiveTintColor: "green",
                        tabBarActiveBackgroundColor: 'lightcyan'
                    })}
                >
                    <TopTab.Screen name="Content" component={Content}  />
                    <TopTab.Screen name="Category2" component={Category2}  />
                </TopTab.Navigator>
                </>
     );
}
 
export default CategoryNavigator;