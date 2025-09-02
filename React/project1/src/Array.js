import React from 'react'

function Array1() {
    const colors = ['Red','Pink','Black','Yellow','Green'];
  return (
    <div>
        {
        colors.map(color => <h2>{color}</h2>)
        }
    </div>
        
  )
}

export default Array1;
