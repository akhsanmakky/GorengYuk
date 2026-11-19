
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { COLORS } from '../constants/theme';


const categories = [
  { id: '1', name: 'Gorengan Gurih niki', icon: '🥟' },
  { id: '2', name: 'Tahu & Tempe', icon: '🫘' },
  { id: '3', name: 'Pisang & Ubi', icon: '🍌' },
  { id: '4', name: 'Risol & Pastel', icon: '🥐' },
  { id: '5', name: 'Paket Hemat', icon: '🛍️' },
];

// Data contoh untuk tampilan awal.
// Harga dapat disesuaikan dengan harga jual sebenarnya.
const products = [
  {
    id: '1',
    name: 'Bakwan Sayur',
    category: 'Gorengan Gurih',
    price: 2000,
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1633796967868-0f4be3105d41?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Tahu Isi Sayur',
    category: 'Gorengan Gurih',
    price: 3000,
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1633796967868-0f4be3105d41?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Tempe Mendoan',
    category: 'Tahu & Tempe',
    price: 2500,
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1633796967868-0f4be3105d41?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Pisang Goreng Crispy',
    category: 'Pisang & Ubi',
    price: 3000,
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1633796967868-0f4be3105d41?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    name: 'Ubi Goreng',
    category: 'Pisang & Ubi',
    price: 2500,
    rating: '4.7',
    image:
      'https://images.unsplash.com/photo-1633796967868-0f4be3105d41?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    name: 'Risol Mayo',
    category: 'Risol & Pastel',
    price: 4000,
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1633796967868-0f4be3105d41?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '7',
    name: 'Pastel Sayur',
    category: 'Risol & Pastel',
    price: 3500,
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1633796967868-0f4be3105d41?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '8',
    name: 'Paket Gorengan Campur',
    category: 'Paket Hemat',
    price: 15000,
    rating: '5.0',
    image:
      'https://images.unsplash.com/photo-1633796967868-0f4be3105d41?auto=format&fit=crop&w=800&q=80',
  },
];

const formatRupiah = (price: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price);

export default function HomeScreen() {
  const [search, setSearch] = React.useState('');
  const [selectedCategory, setSelectedCategory] =
    React.useState('Semua');

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === 'Semua' ||
      product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.background}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>GorenganYuk.</Text>
            <Text style={styles.subtitle}>
              Semua kebutuhan, satu tempat.
            </Text>
          </View>

          <Pressable
            style={styles.cartButton}
            accessibilityLabel="Buka keranjang"
          >
            <Text style={styles.cartIcon}>🛒</Text>
          </Pressable>
        </View>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Cari produk impianmu..."
            placeholderTextColor="#999999"
            style={styles.searchInput}
          />
        </View>

        <View style={styles.promo}>
          <View style={styles.promoContent}>
            <Text style={styles.promoLabel}>
              BELANJA LEBIH HEMAT
            </Text>
            <Text style={styles.promoTitle}>
              Temukan{'\n'}Favoritmu!
            </Text>
            <Text style={styles.promoDescription}>
              Banyak pilihan untukmu.
            </Text>
            <View style={styles.promoTag}>
              <Text style={styles.promoTagText}>
                Jelajahi sekarang →
              </Text>
            </View>
          </View>

          <Text style={styles.promoEmoji}>🛍️</Text>
          <View style={styles.promoCircle} />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Kategori
            </Text>
            <Text style={styles.muted}>Pilih favoritmu</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          >
            {categories.map((category) => (
              <Pressable
                key={category.id}
                style={styles.categoryItem}
                onPress={() =>
                  setSelectedCategory(category.name)
                }
              >
                <View style={styles.categoryIcon}>
                  <Text style={styles.categoryEmoji}>
                    {category.icon}
                  </Text>
                </View>
                <Text style={styles.categoryName}>
                  {category.name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          <Pressable
            style={styles.allCategory}
            onPress={() => setSelectedCategory('Semua')}
          >
            <Text style={styles.allCategoryText}>
              Tampilkan semua produk
            </Text>
          </Pressable>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Pilihan untukmu
            </Text>
            <Text style={styles.muted}>
              {filteredProducts.length} produk
            </Text>
          </View>

          <View style={styles.productGrid}>
            {filteredProducts.map((product) => (
              <Pressable
                key={product.id}
                style={styles.productCard}
              >
                <View style={styles.productImageBox}>
                  <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                    resizeMode="cover"
                  />
                  <View style={styles.favorite}>
                    <Text>♡</Text>
                  </View>
                </View>

                <View style={styles.productInfo}>
                  <Text style={styles.productCategory}>
                    {product.category}
                  </Text>
                  <Text
                    style={styles.productName}
                    numberOfLines={1}
                  >
                    {product.name}
                  </Text>
                  <Text style={styles.productPrice}>
                    {formatRupiah(product.price)}
                  </Text>
                  <Text style={styles.rating}>
                    ★ {product.rating}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>

          {filteredProducts.length === 0 && (
            <Text style={styles.empty}>
              Produk tidak ditemukan.
            </Text>
          )}
        </View>

        <Text style={styles.footer}>
          GorenganYuk • Belanja jadi lebih mudah
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    color: COLORS.text,
    fontSize: 29,
    fontWeight: '900',
    letterSpacing: -1.2,
  },
  subtitle: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: 4,
  },
  cartButton: {
    width: 46,
    height: 46,
    borderWidth: 2,
    borderColor: COLORS.text,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    fontSize: 21,
  },
  searchBox: {
    marginHorizontal: 20,
    height: 52,
    borderWidth: 1.5,
    borderColor: COLORS.text,
    borderRadius: 15,
    backgroundColor: COLORS.surface,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  searchIcon: {
    fontSize: 27,
    marginRight: 10,
    color: COLORS.text,
  },
  searchInput: {
    flex: 1,
    color: COLORS.text,
    fontSize: 13,
  },
  promo: {
    marginHorizontal: 20,
    marginTop: 24,
    minHeight: 174,
    borderRadius: 23,
    backgroundColor: COLORS.primary,
    padding: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  promoContent: {
    zIndex: 2,
  },
  promoLabel: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  promoTitle: {
    fontSize: 27,
    fontWeight: '900',
    lineHeight: 30,
    marginTop: 8,
  },
  promoDescription: {
    fontSize: 11,
    marginTop: 7,
  },
  promoTag: {
    backgroundColor: COLORS.text,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 9,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  promoTagText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  promoEmoji: {
    position: 'absolute',
    right: 17,
    fontSize: 83,
    zIndex: 2,
  },
  promoCircle: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#FFE98B',
    right: -28,
    bottom: -50,
  },
  section: {
    marginTop: 27,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 19,
    fontWeight: '900',
  },
  muted: {
    color: COLORS.secondary,
    fontSize: 11,
  },
  categoryList: {
    paddingHorizontal: 20,
    gap: 19,
  },
  categoryItem: {
    width: 66,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 58,
    height: 58,
    backgroundColor: '#FFF0B3',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0D979',
  },
  categoryEmoji: {
    fontSize: 25,
  },
  categoryName: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 8,
    textAlign: 'center',
  },
  allCategory: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 13,
    paddingVertical: 7,
  },
  allCategoryText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.secondary,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 14,
    gap: 12,
  },
  productCard: {
    width: '47.5%',
    flexGrow: 1,
    flexBasis: '44%',
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  productImageBox: {
    height: 145,
    backgroundColor: '#F3F0E8',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  favorite: {
    position: 'absolute',
    top: 9,
    right: 9,
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productInfo: {
    padding: 11,
  },
  productCategory: {
    fontSize: 10,
    color: COLORS.secondary,
  },
  productName: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 5,
  },
  productPrice: {
    fontSize: 13,
    fontWeight: '900',
    color: COLORS.text,
    marginTop: 8,
  },
  rating: {
    color: '#9B7800',
    fontSize: 11,
    marginTop: 6,
  },
  empty: {
    padding: 25,
    textAlign: 'center',
    color: COLORS.secondary,
  },
  footer: {
    textAlign: 'center',
    fontSize: 10,
    color: COLORS.secondary,
    padding: 28,
  },
});
