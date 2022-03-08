/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Header2';

const Header = props => {
  const {inamel, title, inamer1, inamer2, preasename2, rightname, isBack,isRightPress} =
    props;
  return (
    <View style={styles.views}>
      <View style={styles.flexrow}>
        <View style={styles.flexstart}>
          {/* left icon back */}
          <TouchableOpacity onPress={isBack} style={{flexDirection: 'row'}}>
            <Icon name={inamel} size={23} style={{color: colors.white}} />
            <View style={{marginLeft: 12}}>
              <Text style={styles.titlefont}>{title}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.flexend}>
          <View style={styles.flexrow}>
            {/* Right side Icon */}
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={isRightPress}>
              <Icon
                name={inamer1}
                size={23}
                style={[styles.iconstyle, {color: colors.yellow}]}
              />
              <Text style={styles.righttxt}>{rightname}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={preasename2}>
              <View style={{right: 15}}>
                <Icon name={inamer2} size={23} style={styles.iconstyle2} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
