import { Stack } from "expo-router";

export default function PostsLayout(){
    return (
        <Stack>
        <Stack.Screen name="index" options={{headerShown : false}}/>
        </Stack>
    );
 }
