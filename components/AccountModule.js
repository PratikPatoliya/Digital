import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountModule = props => {
  const {onClick, iconName, title} = props;
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{margin: 7, marginLeft: 20, flexDirection: 'row'}}>
      <Icon
        name={iconName}
        size={22}
        style={{color: colors.white, marginRight: 6}}
      />
      <Text style={{color: colors.white, fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AccountModule;
