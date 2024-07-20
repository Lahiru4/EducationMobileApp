import React from 'react'
import {Stack} from "expo-router";

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen name="signup"
                          options={
                              {headerShown: false}
                          }/>
            <Stack.Screen name="sigin"
                          options={
                              {headerShown: false}
                          }/>
        </Stack>
    )
}