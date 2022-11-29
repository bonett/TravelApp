import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = ({text}) => {
  const [stateText, setStateText] = useState(null);

  const onTextPress = () => {
    setStateText('Update State');
  };

  useEffect(() => {
    setStateText(text)
  }, [text])
  

  return (
    <Text onPress={onTextPress} style={styles.title}>
      {stateText}
    </Text>
  );
};

Title.defaultProps = {
  text: 'Title Component',
};

export default React.memo(Title);
