import { Typography } from '@mui/material';
import React from 'react'
import colors from '../../constants/colors';

export default function Title({ text, size='h3', textcolor=colors.dark.primary, ...props }) {
    return (
        <Typography variant={size} component="h2" color={textcolor} textAlign={'center'} {...props}>
            {text}
        </Typography>
    )
}
