import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map( (item, index) => {
              return <CSSTransition 
              key = {index}
              in={this.state.show} 
              timeout={1000} 
              classNames='my-node' 
              unmountOnExit
            >
              <div>hello</div>
            </CSSTransition>
            })
          }
          
        </TransitionGroup>
        
        <button onClick={this.handleBtnClick}>toggle</button>
      </Fragment>
    )
  }
  handleBtnClick(){
    this.setState(pre => ({
      list: [...pre.list, 'item']
    }))
  }
}

export default App;
