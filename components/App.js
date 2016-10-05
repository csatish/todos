import React from 'react'
import Footer from './Footer'
import TableHelper from './TableHelper'
import RootContainer from './Xflow/RootContainer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'


const App = () => (
  <div style={{width:"100%",height:"100%"}}>
    {/*
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <TableHelper />
    */}

    <RootContainer />
  </div>
)

export default App
