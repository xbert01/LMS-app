import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className='cta-section'>
      <div className="cta-badge">Start learning your way.</div>
      <h2 className='text-3xl font-bold'>
        Join our community of learners and companions today!
      </h2>
      <p>pick a name, subject, voice, personality - and start learning through voice </p>
      <Image src="images/cta.svg" alt='' width={362} height={232}/>
      <button className='btn-primary'>
        <Image src="/icons/plus.svg" alt='plus' width={12} height={12}/>
        <Link href="/companions/new">
          <p>Build a New Companion</p>
        </Link>
      </button>
    </section>
  )
}

export default CTA