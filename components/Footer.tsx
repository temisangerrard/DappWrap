import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export function Footer() {
  const router = useRouter();
  
  return (
    <View style={styles.footer}>
      <TouchableOpacity 
        style={styles.footerButton} 
        onPress={() => router.push('/')}
      >
        <FontAwesome5 name="home" size={18} color="#007AFF" solid />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 32,
    borderTopWidth: 0.5,
    borderTopColor: '#E5E5E5',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  footerButton: {
    alignItems: 'center',
  },
}); 