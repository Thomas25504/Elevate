import { Tabs } from 'expo-router';
import React from 'react';
import { Icon } from 'react-native-elements'; // or the appropriate library

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                    name="index"
                    options={{
                      title: 'Home',
                      headerShown: false,
                      tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                      ),
                      
                    }}
            />
            <Tabs.Screen
                    name="workout"
                    options={{
                      title: 'Workout',
                      headerShown: false,
                      tabBarIcon: ({ color, size }) => (
                        <Icon name="fitness-center" color={color} size={size} />
                      ),
                    }}
            />
            <Tabs.Screen
                    name="nutrition"
                    options={{
                      title: 'Nutrition',
                      headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="restaurant" color={color} size={size} />
                        ),
                    }}
            />
            <Tabs.Screen
                    name="profile"
                    options={{
                      title: 'Profile',
                      tabBarIcon: ({ color, size }) => (
                        <Icon name="person" color={color} size={size} />
                      ),
                    }}
            />
        </Tabs>
    );
}