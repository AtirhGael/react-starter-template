import { Stack } from '@mui/material'
import React from 'react'
import Title from '../Title'

export default function StatsItem({number, title}) {
    return (
        <Stack spacing={2} borderLeft={'1px #ccc solid'} pl={2}>
            <Title text={number} size='h3' textAlign={'start'}/>
            <span>{title}</span>
        </Stack>
    )
}
