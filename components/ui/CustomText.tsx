import React from 'react'
import {Text} from 'react-native'
import {rootStyle} from '../styles/root.styles'

interface CustomTextInterface {
    style?: object
}

export const CustomText: React.FC<CustomTextInterface> = props => {
    return (
        <Text style={{
            ...rootStyle.textStyle,
            ...props.style
        }}
        >
            {props.children}
        </Text>

    )
};
