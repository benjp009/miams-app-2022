import React, { useCallback, useState } from 'react';
import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';
import i18n from '../../li8n';
import RangeSlider from 'rn-range-slider';
import RatingStar from '../../components/RatingComponent';

const FilterModal = ({
  filterModal,
  toggleFilter,
  setFilterModal,
  FilterStates,
  filterOnPress,
}) => {
  const [availability, setAvailability] = useState(avail || '');
  const [expLow, setExpLow] = useState(low || 0);
  const [expHigh, setExpHigh] = useState(high || 15);
  const [searchRating, setSearchRating] = useState(rating || 0);
  const [searchPosition, setSeacrhPosition] = useState(position || '');
  const {
    avail,
    setAvail,
    low,
    setLow,
    high,
    setHigh,
    rating,
    setRating,
    position,
    setPosition,
  } = FilterStates;

  const obj = [1, 2, 3, 4, 5];
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const handleValueChange = useCallback((low, high) => {
    setExpLow(low);
    setExpHigh(high);
  }, []);

  const Rail = () => {
    return <View style={styles.root_r} />;
  };
  const RailSelected = () => {
    return <View style={styles.root_rr} />;
  };

  const Thumb = () => {
    return <View style={styles.root_t} />;
  };

  const updateSearch = () => {
    setAvail(availability);
    setLow(expLow);
    setHigh(expHigh);
    setRating(searchRating);
    setPosition(searchPosition);
  };

  return (
    <Modal
      onBackdropPress={() => setFilterModal(false)}
      isVisible={filterModal}
    >
      <View
        style={{
          backgroundColor: '#fff',
          position: 'relative',
          borderRadius: 16,
          height: 'auto',
        }}
      >
        <ScrollView>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={styles.filterTxt}>{i18n.t('filter')}s</Text>
          </View>
          <View style={{ marginTop: 20, marginHorizontal: 25 }}>
            <View>
              <Text style={styles.postsLabel}>{i18n.t('position')}</Text>
              <TextInput
                placeholder={i18n.t('position_list')}
                placeholderTextColor="#707070"
                style={styles.postsInput}
                onChangeText={e => setSeacrhPosition(e)}
                value={searchPosition}
              />
            </View>
            <View style={{ marginVertical: 22 }}>
              <Text style={styles.postsLabel}>{i18n.t('availability')}</Text>
              <View style={{ marginLeft: 0 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ marginBottom: 8, flexDirection: 'row' }}>
                    <TouchableOpacity
                      onPress={() => setAvailability('full')}
                      activeOpacity={0.5}
                    >
                      <View
                        style={[
                          {
                            height: 22,
                            width: 22,
                            borderRadius: 12,
                            borderWidth: 2,
                            borderColor: '#FCDF6F',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // flexDirection: 'row',
                          },
                          // props.style,
                        ]}
                      >
                        {availability === 'full' ? (
                          <View
                            style={{
                              height: 10,
                              width: 10,
                              borderRadius: 6,
                              backgroundColor: '#FCDF6F',
                            }}
                          />
                        ) : null}
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={{
                        paddingLeft: 10,
                        alignSelf: 'center',
                        fontFamily: 'ProximaNova',
                        fontWeight: availability === 'full' ? 'bold' : 'normal',
                      }}
                    >
                      Full Time
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={() => setAvailability('half')}
                    activeOpacity={0.5}
                  >
                    <View
                      style={[
                        {
                          height: 22,
                          width: 22,
                          borderRadius: 12,
                          borderWidth: 2,
                          borderColor: '#FCDF6F',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        // props.style,
                      ]}
                    >
                      {availability === 'half' ? (
                        <View
                          style={{
                            height: 10,
                            width: 10,
                            borderRadius: 6,
                            backgroundColor: '#FCDF6F',
                          }}
                        />
                      ) : null}
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{
                      paddingLeft: 10,
                      alignSelf: 'center',
                      fontFamily: 'ProximaNova',
                      fontWeight: availability === 'half' ? 'bold' : 'normal',
                    }}
                  >
                    Part Time
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.postsLabel}>Experience</Text>
              <View style={{ marginHorizontal: 4, marginTop: 12 }}>
                <RangeSlider
                  // style={styles.slider}
                  min={0}
                  max={15}
                  step={1}
                  floatingLabel
                  renderThumb={renderThumb}
                  renderRail={renderRail}
                  renderRailSelected={renderRailSelected}
                  onValueChanged={handleValueChange}
                />
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 10,
                  marginHorizontal: 10,
                }}
              >
                <Text style={styles.fontYears}>
                  {expLow}{' '}
                  <Text style={styles.ansFont}>{i18n.t('years')} </Text>
                </Text>
                <Text style={styles.fontYears}>
                  {expHigh}{' '}
                  <Text style={styles.ansFont}>{i18n.t('years')} </Text>
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.postsLabel}>{i18n.t('eval')}</Text>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 12,
                    paddingLeft: 2,
                  }}
                >
                  {obj.map((v, i) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          v === 1
                            ? setSearchRating(1)
                            : v === 2
                            ? setSearchRating(2)
                            : v === 3
                            ? setSearchRating(3)
                            : v === 4
                            ? setSearchRating(4)
                            : v === 5
                            ? setSearchRating(5)
                            : null
                        }
                        style={{ marginRight: 3 }}
                        key={i}
                      >
                        <RatingStar
                          starSize={19}
                          type={
                            v <= searchRating
                              ? 'filled'
                              : v === searchRating + 0.5
                              ? 'half'
                              : 'empty'
                          }
                          notRatedStarColor="#f1f1f1"
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
              {/* <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity
                  onPress={() => {
                    setAvail('');
                    setRating('');
                    setHigh(0);
                    setPosition('');
                    setLow(0);
                  }}
                  activeOpacity={0.5}
                >
                  <View
                    style={[
                      {
                        height: 22,
                        width: 22,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: '#FCDF6F',
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                      // props.style,
                    ]}
                  >
                    {avail === 'half' ? (
                      <View
                        style={{
                          height: 10,
                          width: 10,
                          borderRadius: 6,
                          backgroundColor: '#FCDF6F',
                        }}
                      />
                    ) : null}
                  </View>
                </TouchableOpacity>
                <Text
                  style={{
                    paddingLeft: 10,
                    alignSelf: 'center',
                    fontFamily: 'ProximaNova',
                    fontWeight: avail === 'half' ? 'bold' : 'normal',
                  }}
                >
                  Default all
                </Text>
              </View> */}
            </View>
            <View
              style={{
                marginTop: 40,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginBottom: 20,
              }}
            >
              <TouchableOpacity
                onPress={toggleFilter}
                activeOpacity={0.6}
                style={styles.btnGray}
              >
                <Text style={styles.btnTxt}>{i18n.t('return')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  toggleFilter();
                  // filterOnPress();
                  updateSearch();
                }}
                activeOpacity={0.6}
                style={styles.btnYellow}
              >
                <Text style={styles.btnTxt}>{i18n.t('filter')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              toggleFilter();
            }}
            style={styles.cancelBtn}
          >
            <Image source={require('../../assets/images/cross.png')} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default FilterModal;
