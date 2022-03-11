import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Header';

const Header = props => {
  const {inamel, title, inamer1, inamer2, preasename2, rightname, isBack} =
    props;
  return (
    <View style={styles.views}>
      <View style={styles.flexrow}>
        <View style={styles.flexstart}>
          {/* left icon back */}
          <TouchableOpacity onPress={isBack}>
            <Icon name={inamel} size={23} style={{color: colors.white}} />
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          {/* Text title */}
          <Text style={styles.titlefont}>{title}</Text>
        </View>
        <View style={styles.flexend}>
          <View style={styles.flexrow}>
            {/* Right side Icon */}
            <TouchableOpacity>
              <Icon name={inamer1} size={23} style={styles.iconstyle} />
              <Text style={styles.righttxt}>{rightname}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={preasename2}>
              <Icon name={inamer2} size={23} style={styles.iconstyle2} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
