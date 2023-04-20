import React from 'react'
import ClassSample from './Samples/ClassSample'
import DefaultPropsSample from './Samples/DefaultProps'
import PropTypesSample from './Samples/PropTypes'
import ReactChildren from './Samples/ReactChildren'

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
      <ReactChildren>
        <h1>This is example of React children</h1>
      </ReactChildren>
      </>

    </>
  )
}

export default App