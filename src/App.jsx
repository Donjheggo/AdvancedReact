import React from 'react'
import ClassSample from './Samples/ClassSample'
import DefaultPropsSample from './Samples/DefaultProps'
import PropTypesSample from './Samples/PropTypes'
import DefaultProps_PropTypes from './Samples/DefaultProps_PropTypes'

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

      {/* <>
        <PropTypesSample/>
        <PropTypesSample cardColor="pink"/>
        <PropTypesSample cardColor="lightblue"/>
      </> */}

      <>
      <DefaultProps_PropTypes src="/images/vite.svg" borderRadius='10px'/>
      </>


    </>
  )
}

export default App