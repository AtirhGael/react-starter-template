import { Stack } from '@mui/material'
import React from 'react'
import Title from '../Title'
import colors from '../../constants/colors'

export default function StatsItem({number, title}) {
    return (
        <Stack spacing={2} borderLeft={'1px #ccc solid'} pl={2}>
            <h1 style={{textAlign: 'start', color: colors.dark.primary}}>{number}</h1>
            <span>{title}</span>
        </Stack>
    )
}
