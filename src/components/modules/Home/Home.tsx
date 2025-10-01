
import React from 'react'
import Hero from './Hero'
import MyAdvantage from './MyAdvantage'

export default function Home() {
  return (
    <div className='text-white mt-12'>
        {/* hero section  */}
        <Hero/>
        {/* my advantage  */}
        <MyAdvantage/>
    </div>
  )
}
