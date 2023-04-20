import React from 'react'

const Parent = (props) => {
  return (
    <div style={{border: 'solid 1px blue'}}>
        {props.children}
    </div>
  )
}

export default Parent