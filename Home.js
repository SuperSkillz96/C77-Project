import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>

                    <Image source = {require('../assets/main-icon.png')} style = {styles.titleImage}></Image>

                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar App</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SpaceCraft")
                    }>
                        <Text style={styles.routeText}>Space Craft</Text>
                        <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("StarMap")
                    }>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image source={require("../assets/star_map.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailyPic")
                    }>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleImage: {
        flex: 0.15
    },
    routeCard: {
        flex: 0.12,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 200
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "rgb(230, 212, 0)"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'rgb(0, 191, 255)',
        marginTop: 15,
        paddingLeft: 30
    },
    iconImage: {
        position: "absolute",
        height: 50,
        width: 50,
        resizeMode: "contain",
        right: 20,
        top: 10
    }
})