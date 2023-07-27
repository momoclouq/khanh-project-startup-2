import React from 'react'
import "../Pricing/price.css"

import PriceCard from "./PriceCard"
const Price = () => {
  return (
    <div className='pricing-containter'>
          <section className='banner'>
            <div>
            <h1>Pricing</h1>
            </div>
           
          </section>

          <section className='content'>
            <div>
            <h2>Experience high quality and low-cost tutoring with mentoring</h2>

            </div>

            <div className='price'>
              <PriceCard />
            </div>
          </section>
         
          
    </div>
  )
}

export default Price