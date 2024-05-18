import Card from '../components/card'
import './Products.css'
import React from 'react'

export default function Products({result}) {
  return (
    <>
      <section className="card-container">
       {result}
      </section>
    </>
  )
}
