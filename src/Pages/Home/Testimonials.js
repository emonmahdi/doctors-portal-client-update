import React from 'react'
import { useQuery } from 'react-query'

import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Loading from '../Shared/Loading'
import Review from './Review'

const Testimonials = () => {
    /* const reviews = [
        {
            _id: 1,
            name:"Winson Herry",
            review: '',
            location:"California",
            img:people1
        },
        {
            _id: 2,
            name:"Winson Herry",
            review: '',
            location:"California",
            img:people2
        },
        {
            _id: 3,
            name:"Winson Herry",
            review: '',
            location:"California",
            img:people3
        }
    ] */

    const { data: reviews, isLoading, refetch } = useQuery("reviews", () =>
    fetch("https://y-silk-zeta.vercel.app/review", {
        method: "GET",
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );

    if(isLoading){
      return <Loading />
    } 

  return (
    <section className='my-28 px-8'>
      <div className='flex justify-between'>
        <div>
            <h4 className="text-xl text-primary font-bold">Testimonials {reviews.length}</h4>
            <h5 className='text-3xl'>What Our Patients Says</h5>
        </div>
        <div>
            <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
        {
           reviews && reviews?.map(review => <Review
            key={review._id}
            review={review}
            >

            </Review>)
        }
      </div>
    </section>
  )
}

export default Testimonials
