 import { Stack } from "expo-router";


 export default function RootLayout(){
    return (
        <Stack>
        <Stack.Screen name="(workstar)" options={{headerShown : false, title :'Work Star'}}/>
        <Stack.Screen name="categories" options={{headerShown : true, title :'Categories'}}/>
        <Stack.Screen name="work" options={{headerShown : true, title :'Work'}}/>
        <Stack.Screen name="cart" options={{presentation : 'modal', title :'Work Offers'}}/>
        <Stack.Screen name="auth" options={{headerShown : true}}/>
        </Stack>
    );
 }
 