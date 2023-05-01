import React from 'react'

function TopButtons() {

  const cities = [
    {
      id: 1,
      title: 'Syndey'
    },
    {
      id: 2,
      title: 'Tokyo'
    },
    {
      id: 3,
      title: 'Miami'
    }, 
    {
      id: 4,
      title: 'Paris'
    }, 
    {
      id: 5,
      title: 'Dubai'
    }
  ]

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
      ))}
    </div>
  )
}

export default TopButtons