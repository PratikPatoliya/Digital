import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Header2 from '../components/Header2';

const Privacy_Policy = ({navigation}) => {
  return (
    <View>
      <Header2
        inamel="chevron-back-outline"
        title="Privacy Policy"
        isBack={() => navigation.goBack()}
      />
      <ScrollView>
        <Text style={{fontSize: 22, alignSelf: 'center'}}>INTRODUCTION</Text>
        <Text style={{width: '90%', alignSelf: 'center'}}>
          Demos is committed to protecting your privacy and security. This
          policy explains how and why we use your personal data, to ensure you
          remain informed and in control of your information. You can decide not
          to receive communications or change how we contact you at any time. If
          you wish to do so please contact us by emailing hello@demos.co.uk,
          writing to 76 Vincent Square, London, SW1 2PD or 020 3878 3955 (Lines
          open 9.30am – 6pm, Mon – Fri). We will never sell your personal data,
          and will only ever share it with organisations we work with where
          necessary and if its privacy and security are guaranteed. Personal
          information submitted to Demos is only used to contact you regarding
          Demos activities. Information about visitors to the Demos website
          domain is automatically logged for the purposes of statistical
          analysis. Such information includes the IP address from which you
          visit, referral address, and other technical information such as
          browser type and operating system. Your email address is not
          automatically logged without your knowledge. We will not distribute,
          sell, trade or rent your personal information to third parties. Demos
          may provide aggregate statistics about our website’s users, traffic
          patterns and related site information to reputable third-parties such
          as Demos’s funding bodies or potential partners. Such statistical
          information will not include personally identifying information.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Privacy_Policy;
