import React, { Component, createRef} from 'react'

export class InputRef extends Component {
    constructor(props) {
      super(props)
    
        this.inputRef = createRef();
        this.handleFocus = this.handleFocus.bind( this );  
    }
    handleFocus() {
        return this.inputRef.current.focus();
    }
  render() {
    return (
      <div>
            <input type="text" ref={this.inputRef} />
            <input type="button" value="Focus" onClick={this.handleFocus}/>
      </div>
    )
  }
}

export default InputRef