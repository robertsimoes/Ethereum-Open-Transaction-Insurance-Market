import React from 'react'

const OfferItem = ({ offerName, description, parties, terms, onClick }) => {
  return(
    <div className="offer-item">
      <h3> {offerName} </h3>
      <h5> {description} </h5>
      <p> Parties: {parties} </p>
      <p> Terms: </p>
      <p> {terms} </p>
      <a href="#" className="btn" onClick={(event) => onClick(event)}>Insure Item</a>
    </div>  
  )
}

export default OfferItem