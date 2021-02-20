import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName:"weather-lightning-rainy",
        gradient: ["#2E1437", "#948E99"],
        title: "Thunederstorm",
        subtitle: "Terrible outside! Please be careful!!"
    },
    Drizzle: {
        iconName:"weather-partly-rainy",
        gradient: ["#536976", "#BBD2C5"],
        title: "Drizzle",
        subtitle: "Little rainy... if you want, bring your ☂︎"
    }, 
    Rain: {
        iconName:"weather-rainy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "Rain",
        subtitle: "Too much rainy.. humid..annoying weather :("
    }, 
    Snow: {
        iconName:"weather-snowy",
        gradient: ["#BE93C5", "##7BC6CC"],
        title: "Snow",
        subtitle: "Let's make a snowman ☃️ "
    }, 
    Clear: {
        iconName:"weather-sunny",
        gradient: ["#1c92d2", "#f2fcfe"],
        title: "Sunny",
        subtitle: "Picnic Day! Go to Hangang ><"
    }, 
    Clouds: {
        iconName:"weather-cloudy",
        gradient: ["#8e9eab", "#eef2f3"],
        title: "Clouds",
        subtitle: "Grey sky.. like my mind 😢 "
    },
    Mist: {
        iconName:"weather-fog",
        gradient: ["#649173", "#DBD5A4"],
        title: "Mist",
        subtitle: "Becareful for driving 🚗!"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    }
};
 
export default function Weather ({temp, condition}) {
    return (
        <LinearGradient
        // Background Linear Gradient
        colors={weatherOptions.[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfcontainer}>
            <MaterialCommunityIcons 
                size={100} 
                name={weatherOptions.[condition].iconName} 
                color="white" 
            />
            <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfcontainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow",  
        "Clear", 
        "Clouds",
        "Mist",
        "Haze"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    temp: {
        color: "white",
        fontSize: 40
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left"

    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent:"center",
        flex: 1
    }
})