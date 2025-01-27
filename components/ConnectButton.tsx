import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function ConnectButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Connect</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
}); 