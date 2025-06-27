import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular</h1>
      <section className='home-section'>
        <CompanionCard 
          id='123'
          name='John Doe'
          description='A brief description of John Doe, a popular companion.'
          subject='Mathematics'
          duration={45}
          color='#4A90E2'
        />
        <CompanionCard 
          id='113'
          name='Alice Smith'
          description='A brief description of Alice Smith, a popular companion.'
          subject='Science'
          duration={30}
          color='#E94E77'
        />
        <CompanionCard 
          id='433'
          name='Bob Johnson'
          description='A brief description of Bob Johnson, a popular companion.'
          subject='History'
          duration={45}
          color='#F5A623'
        />

      </section>
      <section className='home-section'>
        <CompanionsList />
        <CTA />
      </section>
    </main>
  )
}

export default Page