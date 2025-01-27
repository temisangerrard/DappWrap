import * as React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ConnectButton } from '../../components/ConnectButton';
import { CategoryCard } from '../../components/CategoryCard';

const QuickActionCard = ({ title, onPress }: { title: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.quickActionCard} onPress={onPress}>
    <Text style={styles.quickActionText}>{title}</Text>
  </TouchableOpacity>
);

export default function Index() {
  const router = useRouter();

  const categories = [
    {
      id: 'lending',
      title: "Lending & Borrowing",
      description: "Access loans using your crypto assets as collateral"
    },
    {
      id: 'swaps',
      title: "Token Swaps",
      description: "Trade tokens directly from your wallet with best rates"
    },
    {
      id: 'bridges',
      title: "Bridges",
      description: "Transfer your assets securely across different blockchains"
    },
    {
      id: 'yield',
      title: "Yield Farming",
      description: "Earn passive income by providing liquidity"
    },
    {
      id: 'aggregators',
      title: "Aggregators",
      description: "Get the best rates across all DEXes automatically"
    },
    {
      id: 'nft',
      title: "NFT Markets",
      description: "Buy, sell and collect digital assets securely"
    },
    {
      id: 'gamefi',
      title: "GameFi",
      description: "Play games while earning crypto rewards"
    },
    {
      id: 'social',
      title: "Social DApps",
      description: "Connect with Web3 communities and create content"
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>DappWrap</Text>
        <ConnectButton />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Your mobile gateway to DApps</Text>
        
        <View style={styles.categories}>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              onPress={() => router.push(`/categories/${category.id}`)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 16,
  },
  categories: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '48%',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  quickActionCard: {
    width: 100,
    padding: 16,
    marginRight: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
}); 