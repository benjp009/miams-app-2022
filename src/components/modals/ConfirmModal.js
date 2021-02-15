import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ActivityIndicator,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { Overlay } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../constants/Theme';
import i18n from '../../li8n';
import { ScrollView } from 'react-native-gesture-handler';
const imgWaiter = require('../../assets/images/waiter2.png');
const imgBg = require('../../assets/images/Group7.png');

const ConfirmationModal = ({
  isVisible,
  handleModalClose,
  name,
  handleIAMWAITER,
  loading,
}) => {
  const scrollRef = React.useRef(null);
  const [placeholderCompanyName, setplaceholderCompanyName] = useState(
    i18n.t('nom_de'),
  );
  const [placeholderSiren, setplaceholderSiren] = useState(i18n.t('siren'));
  const [placeholderBossName, setplaceholderBossName] = useState(
    i18n.t('nom_de_boss'),
  );
  const [placeholderBossContact, setplaceholderBossContact] = useState(
    i18n.t('contact_du_boss'),
  );
  const [CompanyName, setCompanyName] = useState();
  const [Siren, setSiren] = useState();
  const [bossName, setBossName] = useState();
  const [bossContact, setBossContact] = useState();

  const resetPlaceholder = () => {
    setCompanyName('');
    setBossName('');
    setBossContact('');
    setSiren('');
    setplaceholderCompanyName(i18n.t('nom_de'));
    setplaceholderSiren(i18n.t('siren'));
    setplaceholderBossName(i18n.t('nom_de_boss'));
    setplaceholderBossContact(i18n.t('contact_du_boss'));
  };

  return (
    <Overlay
      overlayStyle={styles.container}
      isVisible={isVisible}
      onBackdropPress={() => {
        handleModalClose();
        resetPlaceholder();
      }}
    >
      <ScrollView
        ref={scrollRef}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        keyboardShouldPersistTaps={'handled'}
        style={{ width: '100%' }}
        // style={onHandleFocus && Platform.OS === 'ios' ? { flex: 1 } : {}}
      >
        <KeyboardAvoidingView
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ImageBackground
            style={styles.imgBgStyle}
            source={imgBg}
            resizeMode="stretch"
          >
            <View style={styles.viewImg}>
              <TouchableOpacity
                onPress={() => {
                  handleModalClose();
                  resetPlaceholder();
                }}
                style={{ alignSelf: 'flex-end', margin: 10 }}
              >
                <AntDesign name="close" size={29} color="#485460" />
              </TouchableOpacity>
              <Image
                source={imgWaiter}
                style={styles.imgStyle}
                resizeMode="contain"
              />
            </View>
          </ImageBackground>
          <Text style={[styles.txtName, { fontFamily: 'ProximaNovaBold' }]}>
            {i18n.t('please_fill')}
          </Text>
          <TextInput
            selectionColor={Colors.yellow}
            // onFocus={() => {
            //   scrollRef.current.scrollToEnd({ animated: true });
            // }}
            value={CompanyName}
            onChangeText={text => {
              setCompanyName(text);
            }}
            placeholder={placeholderCompanyName}
            onFocus={() => setplaceholderCompanyName('')}
            onBlur={() => {
              if (!CompanyName) {
                setplaceholderCompanyName(i18n.t('nom_de'));
              }
            }}
            style={[
              styles.inputStyle,
              { fontFamily: 'ProximaNova', textAlign: 'center' },
            ]}
          />
          <TextInput
            // onFocus={() => {
            //   scrollRef.current.scrollToEnd({ animated: true });
            // }}
            selectionColor={Colors.yellow}
            keyboardType="number-pad"
            placeholder={placeholderSiren}
            onFocus={() => setplaceholderSiren('')}
            onBlur={() => {
              if (!Siren) {
                setplaceholderSiren(i18n.t('siren'));
              }
            }}
            value={Siren}
            onChangeText={e => {
              // scrollRef.current.scrollToEnd({ animated: true });
              setSiren(e);
            }}
            style={[
              styles.inputStyle,
              { fontFamily: 'ProximaNova', textAlign: 'center' },
            ]}
          />
          <TextInput
            // onFocus={() => {
            //   scrollRef.current.scrollToEnd({ animated: true });
            // }}
            selectionColor={Colors.yellow}
            placeholder={placeholderBossName}
            onFocus={() => setplaceholderBossName('')}
            onBlur={() => {
              if (!bossName) {
                setplaceholderBossName(i18n.t('nom_de_boss'));
              }
            }}
            value={bossName}
            onChangeText={e => {
              // scrollRef.current.scrollToEnd({ animated: true });
              setBossName(e);
            }}
            style={[
              styles.inputStyle,
              { fontFamily: 'ProximaNova', textAlign: 'center' },
            ]}
          />
          <TextInput
            onFocus={() => {
              setplaceholderBossContact('');
              setTimeout(() => {
                scrollRef.current.scrollToEnd({ animated: true });
              }, 100);
            }}
            selectionColor={Colors.yellow}
            keyboardType="number-pad"
            placeholder={placeholderBossContact}
            onBlur={() => {
              if (!bossContact) {
                setplaceholderBossContact(i18n.t('contact_du_boss'));
              }
            }}
            value={bossContact}
            onChangeText={e => {
              scrollRef.current.scrollToEnd({ animated: true });
              setBossContact(e);
            }}
            style={[
              styles.inputStyle,
              { fontFamily: 'ProximaNova', textAlign: 'center' },
            ]}
          />

          <TouchableOpacity
            disabled={
              loading
                ? true
                : CompanyName && Siren && bossName && bossContact
                  ? false
                  : true
            }
            onPress={async () => {
              await handleIAMWAITER(CompanyName, Siren, bossName, bossContact);
              resetPlaceholder();
            }}
            style={[
              styles.btnConfrm,
              CompanyName &&
                Siren &&
                bossName &&
                bossContact && {
                backgroundColor: Colors.yellow,
              },
            ]}
          >
            {loading ? (
              <ActivityIndicator size={30} color="#000" />
            ) : (
              <Text
                style={[styles.txtBtnConfrm, { fontFamily: 'ProximaNova' }]}
              >
                {i18n.t('validate')}
              </Text>
            )}
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </Overlay>
  );
};

export default ConfirmationModal;

const styles = StyleSheet.create({
  container: {
    width: '88%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    overflow: 'hidden',
    borderRadius: 15,
  },
  imgBgStyle: {
    width: '100%',
    height: 240,
  },
  txtBtnConfrm: {
    fontSize: 16,
    color: Colors.fontDark,
  },
  btnConfrm: {
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
    height: 45,
  },
  txtName: {
    fontSize: 18,
    color: Colors.fontDark,
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
    maxWidth: '80%',
  },
  imgStyle: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    marginTop: -30,
    marginRight: -20,
  },
  viewImg: {
    width: '100%',
    height: 240,
  },
  inputStyle: {
    height: 50,
    width: '80%',
    borderColor: '#e6e6e6',
    borderRadius: 9,
    borderWidth: 1.3,
    marginTop: 12,
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
