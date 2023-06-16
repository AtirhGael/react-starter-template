import React from 'react'
import { Link } from 'react-router-dom'
import frontendUrl from '../../urls/frontendUrl'
import Title from '../../components/Title'
import about from '../../assets/images/about.jpg'
import { Box, Stack } from '@mui/material'
import StatsItem from '../../components/StatsItem'

export default function Home() {
  return (
<<<<<<< HEAD
    <div>
        Hello home gdeu page <Link to={frontendUrl.HOME.DASHBOARD}>go to DASHBOARD</Link>
    </div>
=======
    <Box px={10}>
      <Title text={'About ScienceSoft – Global IT Company'} py={4} />
      <Box width={'70%'} mt={2}>
        <Box>
          <img width={'100%'} src={about} style={{ marginBottom: 30 }} />
          <p>
            <span className='fw-bold'>Founded in 1989</span>, ScienceSoft is a provider of <span className='fw-bold text-primary'>IT consulting</span> and
            <span className='fw-bold text-primary'> software development services. </span>
            Having started as a small AI product company,
            we switched to IT services in 2002 and ever since we have helped non-IT organizations and software product
            companies improve business performance and quickly win new customers.
          </p>
        </Box>
      </Box>
      <Box mt={10} mb={15}>
        <Title text={'ScienceSoft in Numbers'} textAlign={'start'} size='h4' mb={5} />
        <Stack direction="row" mb={4} spacing={{ xs: 1, sm: 2, md: 12 }}>
          <StatsItem number="34" title="years in IT" />
          <StatsItem number="750+" title="IT professionals" />
          <StatsItem number="1600+" title="success stories" />
          <StatsItem number="30+" title="industry covers" />
        </Stack>
      </Box>
      <Box width={'70%'} mt={1} mb={20}>
        <Title text={'Our Geography'} textAlign={'start'} size='h4' mb={5} />
        <p>
            <span className='fw-bold'>Headquartered in the US and operating internationally</span>, 
            our team drives digital transformation for businesses globally. 
            We ensure on-site presence to deliver services to our <span className='fw-bold'>major target markets</span> in:
          </p>
      </Box>
    </Box>
>>>>>>> a032d9c93847e8a519badac53fcebd26194bc267
  )
}
