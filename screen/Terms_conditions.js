import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header2 from '../components/Header2';

const Terms_conditions = ({navigation}) => {
  return (
    <View>
      <Header2
        inamel="chevron-back-outline"
        title="Terms Conditions"
        isBack={() => navigation.goBack()}
      />
      <ScrollView>
        <Text style={{fontSize: 22, alignSelf: 'center'}}>Acceptance of the Terms of Use</Text>
        <Text style={{width: '90%', alignSelf: 'center'}}>
          The following terms and conditions, together with any referenced
          documents (collectively, "Terms of Use") form a legal agreement
          between you and your employer, employees, agents, contractors and any
          other entity on whose behalf you accept these terms (collectively,
          “you” and “your”), and ServiceNow, Inc. (“ServiceNow,” “we,” “us” and
          “our”). The Terms of Use apply to the demonstration services available
          on the website where these Terms of Use are presented, including any
          ServiceNow Intellectual Property (as defined below) therein (the “Demo
          Website”). By accessing or using the Demo Website, or by clicking to
          accept or agree to the Terms of Use when this option is made available
          to you, you represent that you have read and understood, and agree to
          be bound by these Terms of Use. If you do not agree to these Terms of
          Use, you may not use the Demo Website. Personally identifiable
          information collected about you by this Demo Website is treated in
          accordance with the Privacy Policy, which is hereby incorporated into
          these Terms of Use by reference. If you do not agree to these Terms of
          Use or the Privacy Policy, you must accept these Terms of Use or
          access the Demo Website.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Terms_conditions;
