import * as React from 'react';

export const AddIcon = ({style}: {style: {backgroundColor: string, color: string}}) => {
    const {backgroundColor, color} = style;
    return (
        <svg width={20} height={20}>
            <circle cx={10} cy={10} r={10} fill={backgroundColor}/>
            <text
                x={10} y={15.5}
                fontSize={20}
                textAnchor={'middle'}
                fill={color}
                fontWeight={'bold'}
            >+</text>
        </svg>
    )
};
