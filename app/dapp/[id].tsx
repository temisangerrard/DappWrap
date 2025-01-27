import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import { FontAwesome5 } from '@expo/vector-icons';
import { Footer } from '../../components/Footer';
import { dapps } from '../../data/dapps';

export default function DappScreen() {
  const { id, category } = useLocalSearchParams<{ id: string; category: string }>();
  const router = useRouter();
  
  const dappList = category ? dapps[category] : [];
  const dapp = dappList?.find(d => d.id === id);
  
  if (!dapp) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerTitle: () => (
            <View style={styles.headerTitle}>
              <Text style={styles.headerText}>{dapp.name}</Text>
              <FontAwesome5 name="check-circle" size={14} color="#34C759" style={styles.verifiedIcon} />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => router.back()}
              style={styles.backButton}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            >
              <FontAwesome5 name="chevron-left" size={18} color="#007AFF" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShadowVisible: false,
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <WebView
        source={{ uri: dapp.url }}
        style={styles.webview}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  verifiedIcon: {
    marginLeft: 6,
  },
  backButton: {
    padding: 12,
    marginLeft: 4,
  },
  webview: {
    flex: 1,
  },
}); 