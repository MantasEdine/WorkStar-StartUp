import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, StyleSheet } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from "react";
function TabSecondIconBar (props : {
  name : React.ComponentProps<typeof MaterialCommunityIcons>['name'],
  color : string
}){
  return <MaterialCommunityIcons size={24} {...props} style={{color :"#000"}}/>
}
function TabBarIcon (props : {
  name : React.ComponentProps<typeof FontAwesome5>['name'],
  color : string
})
{
  return <FontAwesome5 size={24} {...props} style={{color : "#686868"}}/>

}
const TabsLayout = ()=>{
    return(
 <SafeAreaView edges ={['top']}style ={styles.safeArea}>
   <Tabs
   
    screenOptions={{
    
      tabBarActiveTintColor : 'green',
      tabBarInactiveTintColor : '#000',
      tabBarLabelStyle : {fontSize : 16},
      tabBarStyle : {
        paddingTop : 10,
        borderTopLeftRadius : 15,
        borderTopRightRadius : 15,
      },
      headerShown : false

    }}
   >
    <Tabs.Screen name="index" options={{ tabBarIcon(props){
     return <TabBarIcon {...props} name="user-tie"/>
    }}}/>
    <Tabs.Screen name="posts" options={{tabBarIcon(props){
     return <TabBarIcon {...props} name="book"/>
    }}}/>


  </Tabs>
  </SafeAreaView>
    );
}
export default TabsLayout;
const styles = StyleSheet.create({
  safeArea : {
    flex : 1,
    backgroundColor : "#8890B4"
  }
}) 

