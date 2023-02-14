import React from 'react'

const FaqList = ({index, faq}) => { 
    const {title, description} = faq
  return (
    <div
    tabIndex={index}
    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3"
  >
    <div className="collapse-title text-xl font-medium">
     {title}
    </div>
    <div className="collapse-content">
      <p>{description}</p>
    </div>
  </div>
  )
}

export default FaqList
