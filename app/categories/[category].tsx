import * as React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { dapps, type Dapp } from '../../data/dapps';

export default function CategoryScreen() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();
  const categoryDapps = dapps[category] || [];

  const renderDapp = ({ item }: { item: Dapp }) => (
    <TouchableOpacity 
      style={styles.dappCard}
      onPress={() => router.push({
        pathname: '/dapp/[id]',
        params: { id: item.id, category }
      })}
    >
      <Text style={styles.dappName}>{item.name}</Text>
      <Text style={styles.dappDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          title: category.charAt(0).toUpperCase() + category.slice(1),
          headerShown: true,
        }}
      />
      <FlatList
        data={categoryDapps}
        renderItem={renderDapp}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 16,
  },
  dappCard: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  dappName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  dappDescription: {
    fontSize: 14,
    color: '#666',
  },
}); 