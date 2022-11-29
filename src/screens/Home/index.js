import React, { useEffect, useState } from 'react';
import {SafeAreaView, View} from 'react-native';
import Title from '../../components/Title';

const Home = () => {
    const [title, setTitle] = useState('My First Component');

    useEffect(() => {
      setTimeout(() => {
        setTitle('Update prop text');
      }, 3000);
    }, [])
    
  return (
    <SafeAreaView>
      <View>
        <Title text={title} />
        <Title text={'Functional Component'} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
