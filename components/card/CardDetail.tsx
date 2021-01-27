import React from 'react'
import {View, Text, Image} from "react-native";
import {style} from "./Card.style";
import {truncate} from "../../utils/utils";
import clockIcon from '../../assets/image-icons/clock.png'
import SecurityIcon from '../../assets/image-icons/security.png'


interface CardDetailInterface {
    fullSize: boolean,
    text: string,
    deadline: string,
    size: number | string
}

export const CardDetail: React.FC<CardDetailInterface> = props => {

    if (props.fullSize) {
        return (


            <View style={style.descriptionView}>
                <View style={style.detailView}>
                    <View style={style.detailViewItem}>
                        <Image source={clockIcon} style={style.detailViewImage}/>
                        <View style={style.detailViewItemTexts}>
                            <Text style={style.detailViewText}>Заказ активен до: </Text>
                            <Text style={style.detailViewStrongText}>{props.deadline}</Text>
                        </View>
                    </View>
                    <View style={style.detailViewItem}>
                        <Image source={SecurityIcon} style={style.detailViewImage}/>
                        <View style={style.detailViewItemTexts}>
                            <Text style={style.detailViewText}>Вес груза:</Text>
                            <Text style={style.detailViewStrongText}>{props.size}</Text>
                        </View>
                    </View>
                </View>
                <View style={style.detailView}>
                    <Text>{props.text}</Text>
                </View>
            </View>

        )
    }

    return (

        <View style={style.descriptionView}>
            <Text>{truncate(props.text, 40)}</Text>
        </View>
    )
};
