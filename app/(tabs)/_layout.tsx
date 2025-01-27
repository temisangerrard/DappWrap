import * as React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          height: 32,
          borderTopWidth: 0.5,
          borderTopColor: '#E5E5E5',
          backgroundColor: '#fff',
        },
        tabBarItemStyle: {
          height: 32,
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
        tabBarLabelStyle: {
          display: 'none',
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 
              name="home" 
              size={18} 
              color={focused ? '#007AFF' : '#8E8E93'} 
              solid 
            />
          ),
        }}
      />
    </Tabs>
  );
} 