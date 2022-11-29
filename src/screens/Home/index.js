import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text={'Where do'} style={{fontWeight: 'normal'}} />
        <Title text={'you want to go?'} />

        <Title text={'Explore Attractions'} style={styles.subtitle} />

        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={[
            'All',
            'Popular',
            'Recommended',
            'Most Viewed',
            'Most Visited',
            'Others',
          ]}
        />

        <View style={styles.row}>
          <AttractionCard
            title={'Egypt'}
            subtitle={'Cairo'}
            imageSrc={
              'https://imgs.search.brave.com/LIHrpO5jAYXAU-vm0xaVVaQpBRElI5XEGYpMI4icTnE/rs:fit:870:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/R2hzVzVvRHA1Y3Ew/V1hYcmxhSnVRSGFF/QyZwaWQ9QXBp'
            }
          />
          <AttractionCard
            title={'Egypt'}
            subtitle={'Cairo'}
            imageSrc={
              'https://imgs.search.brave.com/LIHrpO5jAYXAU-vm0xaVVaQpBRElI5XEGYpMI4icTnE/rs:fit:870:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/R2hzVzVvRHA1Y3Ew/V1hYcmxhSnVRSGFF/QyZwaWQ9QXBp'
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
