import React from 'react'
import {Text, View} from "react-native";
import {style} from "./Card.style";

interface CardDotInterface {
    direction: string,
    length: number,
    index: number,
}

export const CardDot: React.FC<CardDotInterface> = props => {
    return (
        <View style={style.dotContainer}>
            <View style={style.dotOuterRec}>
                <View style={style.dotInnerRec}/>
                {props.index === props.length - 1 ? null : <View style={style.dotLine}/>}
            </View>
            <View style={style.dotTextContainer}>
                <Text style={style.dotText}>{props.direction}</Text>
            </View>
        </View>
    )
};
