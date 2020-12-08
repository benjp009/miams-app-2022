import React from 'react'
import { StyleSheet, Text, View, StatusBar, ImageBackground, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import GlobalHeader from '../../components/GlobalHeader'
import {placesList as LIST} from '../../dummyData/DummyData'
import { Rating, AirbnbRating } from 'react-native-ratings';

const Home = () => {
    return <View style={styles.container}>
        <GlobalHeader
        // arrow={true}
        // headingText="kjshk"
        leftText="Bonjour Zain hasan"
        centerHide={true}
        RightImg={true}
        />
        <StatusBar backgroundColor="orange" />
        <Text style={styles.txtHeading}>
            Autour de vous
        </Text>
        <FlatList
            data={LIST}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item._id}
            renderItem={(itemData) => (
                <View style={styles.viewItemConatier}>
                    <ImageBackground style={styles.imgCard} source={{uri: itemData.item.img}}>
                        <View style={{}}>
                        <Rating
                            // showRating
                            // onFinishRating={this.ratingCompleted}
                            style={{ paddingVertical: 0, alignSelf:"flex-start" }}
                            // ratingBackgroundColor='blue'
                            // ratingColor='green'
                            imageSize={20}
                            // startingValue={ratingCount/2}
                            // readonly={true}
                            ratingCount={5}
                        />
                        </View>
                        <View style={{}}>
                            <Text style={{color:"#fff", fontSize:17}}>{itemData.item.name}</Text>
                            <View style={styles.view2Card}>
                                <Text style={styles.txt2Card}>{itemData.item.distance}</Text>
                                <Text style={styles.txt2Card}>{itemData.item.services} serveurs</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            )}
            />
    </View>
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff"
    },
    view2Card:{
        flexDirection:"row", width:"100%", alignItems:"center", justifyContent:"space-between"
    },
    txt2Card:{
        color:"#EDEFEE", fontSize:13
    },
    imgCard:{
        flex:1, padding:12, justifyContent:'space-between'
    },
    viewItemConatier:{
        width:Dimensions.get('window').width*0.44,
        height:Dimensions.get('window').width*0.55,
        margin:Dimensions.get('window').width*0.03, backgroundColor:"red",
        borderRadius:12,overflow:"hidden"
    },
    txtHeading:{
        fontSize:22, marginTop:10,width:"90%", alignSelf:"center"
    }
})