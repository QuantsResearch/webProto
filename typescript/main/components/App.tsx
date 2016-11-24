import * as React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

interface Props {
}

class App extends React.Component<Props, {}> {
    render() {
        return <div>
            <AddTodo addTodo={()=>{}}/>
            <VisibleTodoList onTodoClick={(id:number) => {id}} todos={[]}/>
            <Footer />
        </div>
    }
}

export default App