import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, ImageBackground, ScrollView, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons, FontAwesome, Entypo } from "@expo/vector-icons";
import GlobalHeader from '../../components/GlobalHeader'
import { placesList as LIST } from '../../dummyData/DummyData'
import { Colors } from '../../constants/Theme';
import HomeCard from '../../components/HomeCard';
import RatingStar from '../../components/RatingComponent';

const Home = ({ navigation }) => {

    let ItemsOdd = []
    let ItemsEven = []

    for (var i = 0; i < LIST.length; i++) {
        if ((i + 2) % 2 == 0) {
            ItemsOdd.push(LIST[i]);
        }
        else {
            ItemsEven.push(LIST[i]);
        }
    }
    console.log('ItemsOddddddddd', ItemsOdd)
    console.log('ItemsEvennnnnnnn', ItemsEven)

    // Star arrayyyyyyyy
    const [starSelect, setstarSelect] = useState(3.5)
    const obj = [1, 2, 3, 4, 5];
    const onPressStar = (v) => {
        setstarSelect(v);
    }

    return <View style={styles.container}>
        <GlobalHeader
            // arrow={true}
            leftText="Bonjour Zain hasan"
            centerHide={true}
            RightImg={true}
            search={true}
        />
        <StatusBar backgroundColor={Colors.yellow} />

        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.txtHeading}>
                Autour de vous
            </Text>
            <View style={{ flexDirection: "row" }}>
                <FlatList
                    data={ItemsOdd}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item._id}
                    renderItem={(itemData) => (
                    <HomeCard 
                        navigation={navigation}
                        img={itemData.item.img}
                        rating={itemData.item.rate}
                        name={itemData.item.name}
                        distance={itemData.item.distance}
                        services={itemData.item.services}
                    />
                    )}
                />
                <FlatList
                    data={ItemsEven}
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: 15 }}
                    keyExtractor={(item) => item._id}
                    renderItem={(itemData) => (
                    <HomeCard 
                        navigation={navigation}
                        img={itemData.item.img}
                        rating={itemData.item.rate}
                        name={itemData.item.name}
                        distance={itemData.item.distance}
                        services={itemData.item.services}
                    />
                        // <TouchableOpacity
                        //     onPress={() => navigation.navigate('OpenCardReviews',
                        //         {
                        //             img: itemData.item.img,
                        //             rating: itemData.item.rate,
                        //             name: itemData.item.name,
                        //             distance: itemData.item.distance,
                        //             services: itemData.item.services
                        //         }
                        //     )}
                        //     style={[styles.viewItemConatier]}>
                        //     <ImageBackground style={styles.imgCard} source={{ uri: itemData.item.img }}>
                        //         <TouchableOpacity
                        //             style={styles.btnCross}
                        //         >
                        //             <Entypo
                        //                 name="cross"
                        //                 size={21}
                        //                 color="#485460"
                        //                 style={{ backgroundColor: Colors.yellow, borderRadius: 20 }}
                        //             />
                        //         </TouchableOpacity>
                        //         <View style={{}}>
                        //             <View style={{ flexDirection: "row" }}>
                        //                 {obj.map((v, i) => {
                        //                     return (
                        //                         <TouchableOpacity onPress={() => { onPressStar(v) }}>
                        //                             <RatingStar starSize={17}
                        //                                 type={ v <= starSelect ? "filled" : 
                        //                                 v === starSelect + 0.5 ? "half" : "empty" 
                        //                             }
                        //                                 notRatedStarColor='rgba(255,255,255, 0.6)'
                        //                             />
                        //                         </TouchableOpacity>
                        //                     )
                        //                 }
                        //                 )}
                        //             </View>
                        //             <Text style={{ color: "red" }}>
                        //             </Text>
                        //         </View>
                        //         <View style={{}}>
                        //             <Text style={{ color: "#fff", fontSize: 18 }}>{itemData.item.name}</Text>
                        //             <View style={styles.view2Card}>
                        //                 <Text style={styles.txt2Card}>{itemData.item.distance}</Text>
                        //                 <Text style={styles.txt2Card}>{itemData.item.services.length} serveurs</Text>
                        //             </View>
                        //         </View>
                        //     </ImageBackground>
                        // </TouchableOpacity>
                    )}
                />
            </View>
        </ScrollView>
    </View>
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    btnCross: {
        backgroundColor: "#fff", position: "absolute", alignSelf: "flex-end",
        borderRadius: 20, margin: -1, right: 0, width: 30, height: 30,
        justifyContent: "center", alignItems: "center"
    },
    view2Card: {
        flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between"
    },
    txt2Card: {
        color: "#EDEFEE", fontSize: 13
    },
    imgCard: {
        flex: 1, padding: 12, justifyContent: 'space-between'
    },
    viewItemConatier: {
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get('window').width * 0.56,
        margin: Dimensions.get('window').width * 0.02, backgroundColor: "red",
        borderRadius: 12, overflow: "hidden"
    },
    txtHeading: {
        fontSize: 22, marginTop: 10, width: "90%", alignSelf: "center"
    }
})