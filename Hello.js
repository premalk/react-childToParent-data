import React from 'react';


class Hello extends React.Component {
  constructor(props){
    super(props)
  }
  handle = () => {
    this.props.name('React-native');
  }
  render(){
    return(
      <div>
      <input type='button' value='OK' onClick= {this.handle}/>
      </div>
    )
  }
}
export default Hello;
