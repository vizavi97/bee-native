import React, {useState} from 'react'
import {TouchableOpacity, View, Image} from "react-native";
import {CustomText as Text} from '../ui/CustomText'
import {CardDot} from "./CardDot";
import {style} from "./Card.style";
import {numberWithSpaces} from "../../utils/utils";
import {CardDetail} from "./CardDetail";

//IMPORT ICONS

interface CardInterface {
    directions?: string[],
    text?: string,
    deadline?: string,
    size?: string,
    cost?: number | string
}

const data = {
    directions: ["Ташкент, Сергелийский район", "Самарканд по быстрому", "Ташкентская область, Чирчик"],
    text: "В областной филиал нужно доставить бытовую технику Xiaomi (Чайники, мультиварки, пылесосы и очистители воздуха)",
    deadline: "30.02.23",
    size: "6 Тонн",
    cost: 300000
};

export const Card: React.FC<CardInterface> = () => {
    const [fullSize, setFullSize] = useState(true);
    const directions = fullSize ? data.directions : [data.directions[0], data.directions[data.directions.length - 1]];

    return (
        <TouchableOpacity style={style.container} onPress={() => setFullSize(!fullSize)}>
            <View style={style.topSide}>
                {directions.map((item, index) => <CardDot
                    direction={item}
                    index={index}
                    key={index}
                    length={directions.length}/>
                )}
                <CardDetail
                    fullSize={fullSize}
                    text={data.text}
                    deadline={data.deadline}
                    size={data.size}
                />
                <View style={style.midContainer}>
                    <View style={style.midContainer}>
                        <Text style={style.midCost}>{numberWithSpaces(data.cost)} сум</Text>
                    </View>
                    <View style={style.midButtonContainer}>
                        <TouchableOpacity
                            style={style.midButton}
                            onPress={() => console.log("pressed")}
                        >
                            <View>
                                <Text style={style.midButtonText}> Получить </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={style.divider}/>
            <View style={style.bottomSide}>
                <View style={style.userInfo}>
                    <Image
                        style={style.userImage}
                        source={{uri: "https://6-dof.ru/wp-content/uploads/2017/07/apple-logo-390x219.png"}}/>
                    <View style={style.userDetail}>
                        <Text>Xiomi</Text>
                        <Text>4 минуты назад</Text>
                    </View>
                </View>
                <View>

                </View>
            </View>
        </TouchableOpacity>
    )
};

