
import React from 'react'
import Hero from './Hero'
import MyAdvantage from './MyAdvantage'
import ExperienceSection from './ExperienceSection'
import RecentWork from './RecentWork'

export default function Home() {
  return (
    <div className='text-white mt-12'>
        {/* hero section  */}
        <Hero/>
        {/* my advantage  */}
        <MyAdvantage/>
        {/* experience section */}
        <ExperienceSection/>
        {/* portfolio carousel */}
        <RecentWork/>
    </div>
  )
}
