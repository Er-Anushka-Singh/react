import React from 'react'

const Child = ({result}) => {

    console.log("Child render")
  return (
    <div>
      <h1>Child</h1>
      <h2>Sum Of Nth number is {result}</h2>
    </div>
  )
}

export default React.memo(Child);