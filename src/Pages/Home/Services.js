import React from 'react'

import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service'

const Services = () => {
  const services = [
    {
      _id: 1,
      name:"Fluoride Treatment",
      description: "Fluoride joins the tooth structure when your teeth develop, thus strengthening the teeth' enamel, making them less susceptible to bacteria and cavities.",
      img: fluoride,
    },
    {
      _id: 2,
      name:"Cavity Filling",
      description: " You may feel a bit of a sting, but that's a reaction from the local anesthetic when it starts to block the nerve signals to stop the pain Fillings are also used to repair ",
      img: cavity,
    },
    {
      _id: 3,
      name:"Teeth Whitening",
      description: "Teeth Whitening is a quick and painless in-office whitening system that provides dramatic results—teeth that are up to eight shades whiter!",
      img: whitening,
    }
  ]
  return (
    <div className='px-8 py-12 bg-gray-300'>
      <div className='text-center'>
        <h3 className='text-primary text-xl font-bold'>Our Services</h3>
        <h2 className='text-4xl'>Services We Provide</h2>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
        {
          services.map(service => <Service
          key={service._id}
          service={service}
          ></Service>)
        }
      </div>
    </div>
  )
}

export default Services
