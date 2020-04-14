import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Icon, Product } from '../components/';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default class Home extends React.Component {
  renderSearch = () => {
    const { navigation } = this.props;
    const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconCamera}
        placeholder="What are you looking for?"
        onFocus={() => navigation.navigate('Pro')}
      />
    )
  }
  
  renderTabs = () => {
    const { navigation } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Categories</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Best Deals</Text>
          </Block>
        </Button>
      </Block>
    )
  }

  renderProducts = () => {
    return (
      <Block
        contentContainerStyle={styles.products}
        >
        <Block flex style={styles.sectionMain}>
          <Block bold size={16} style={styles.sectionTitleMain}>
            <Text style={styles.sectionTitleMainText}>How Are You Feeling</Text>
          </Block>
          <Product product={products[0]} horizontal style={styles.howAreYouFeeling} />
          <Text bold size={16} style={styles.sectionTitle}>Buddy Stats</Text>
          <ScrollView
              horizontal={true}
              contentContainerStyle={styles.productsScroller}>
            <Product product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[2]}  style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[3]} />
          </ScrollView>
            <Text bold size={16} style={styles.sectionTitle}>Buddies who need a check-in</Text>
          <ScrollView
          horizontal={true}
          contentContainerStyle={styles.productsScroller}>
            <Product product={products[3]} horizontal style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[4]} horizontal style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[4]} horizontal style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[4]} horizontal style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[4]} horizontal style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[4]} horizontal style={{ marginRight: theme.SIZES.BASE }} />
          </ScrollView>
        </Block>
      </Block>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  sectionMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  products: {
    marginLeft: 5,
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
  sectionTitleMain: {
    marginTop: 20,
    marginLeft: 20,
    width: 308,
    height: 54,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    backgroundColor: '#00b6b8',
  },
  sectionTitleMainText: {
    alignContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  howAreYouFeeling: {
    marginTop: -20,
    marginLeft: 5,
    marginRight: 5,
  },
  sectionTitle: {
    marginTop: 20,
    marginLeft: 20,
  }
});
