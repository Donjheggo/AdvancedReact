import React from 'react'
import ClassSample from './Samples/ClassSample'
import DefaultPropsSample from './Samples/DefaultProps'
import PropTypesSample from './Samples/PropTypes'

const App = () => {
  return (
    <>

      <>
        {/* <ClassSample/> */}
      </>

      <>
        {/* <DefaultPropsSample cardColor="lightblue"/>
        <DefaultPropsSample/>
        <DefaultPropsSample cardColor="pink"/> */}
      </>

      <>
        <PropTypesSample/>
        <PropTypesSample cardColor="pink"/>
        <PropTypesSample cardColor="lightblue"/>
      </>


    </>
  )
}

export default App