import React from 'react';
import {
  StatusBar,
  Platform,
  StatusBarStyle, 
} from 'react-native';
import { colors } from '@util/Colors';

const Shared = ({isDarkContent}) => (
  <StatusBar 
    barStyle={Platform.select({
      ios: isDarkContent ? 'dark-content' : 'light-content', 
      android: 'light-content',
    })}
    backgroundColor={colors.darkBlue}/>
);
export default Shared;
