import React from 'react'
import { Link } from 'react-router-dom'
import frontendUrl from '../../urls/frontendUrl'

export default function Home() {
  return (
    <div>
        Hello home page <Link to={frontendUrl.HOME.DASHBOARD}>go to DASHBOARD</Link>
    </div>
  )
}
