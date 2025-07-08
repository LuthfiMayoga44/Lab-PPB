import React, { useState } from 'react';
import { View, Text, ScrollView, Alert, StyleSheet, Button } from 'react-native';
import { foods, drinks } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomeScreen({ route }) {
  const { userName } = route.params;
  const [orders, setOrders] = useState([]);

  const handleBuy = (item) => {
    Alert.alert(
      'Konfirmasi Pembelian',
      `Beli ${item.name} seharga Rp${item.price} dengan cash?`,
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Beli',
          onPress: () => {
            setOrders([...orders, { ...item, status: 'Belum jadi' }]);
            Alert.alert('Berhasil', 'Pesanan Anda sedang diproses!');
          },
        },
      ]
    );
  };

  // Fungsi total harga
  const getTotal = () => {
    return orders.reduce((total, item) => total + item.price, 0);
  };

  // Fungsi untuk menyelesaikan transaksi
  const handleCheckout = () => {
    if (orders.length === 0) {
      Alert.alert('Pesanan Kosong', 'Anda belum membeli apapun.');
      return;
    }

    const totalHarga = getTotal();

    Alert.alert(
      'Total Pembayaran',
      `Total: Rp${totalHarga}\nLanjut bayar dengan cash?`,
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Selesai Bayar',
          onPress: () => {
            Alert.alert('Transaksi Berhasil', 'Terima kasih, pesanan Anda akan segera disiapkan.');
            setOrders([]); // kosongkan pesanan
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>Selamat datang, {userName}!</Text>

      <Text style={styles.section}>🍽️ Menu Makanan</Text>
      {foods.map((item) => (
        <ProductCard key={item.id} item={item} onBuy={handleBuy} />
      ))}

      <Text style={styles.section}>🥤 Menu Minuman</Text>
      {drinks.map((item) => (
        <ProductCard key={item.id} item={item} onBuy={handleBuy} />
      ))}

      <Text style={styles.section}>📦 Pesanan Anda</Text>
      {orders.length === 0 ? (
        <Text style={{ paddingHorizontal: 15 }}>Belum ada pesanan.</Text>
      ) : (
        orders.map((order, index) => (
          <Text key={index} style={{ paddingHorizontal: 15 }}>
            {order.name} - {order.status}
          </Text>
        ))
      )}

      {orders.length > 0 && (
        <>
          <Text style={styles.total}>💰 Total: Rp{getTotal()}</Text>
          <View style={styles.buttonWrapper}>
            <Button title="Selesaikan Pembayaran" onPress={handleCheckout} />
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F9FC',
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: '#DFF6FF',
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
    color: '#2E7D32',
  },
  buttonWrapper: {
    paddingHorizontal: 15,
    marginBottom: 30,
  },
});
