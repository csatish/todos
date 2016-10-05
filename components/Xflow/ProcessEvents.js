import React from 'react'
import Component from './BaseComponent'

export class ProcessEvents extends Component {
   constructor(props, context) {
      super(props, context);

      this.state = {

      }
      // this._bind('showMenu')
   }

   render(){
      return (
         <div id="processEvents" style={this.props.style} ref="processEvents">
            this is ProcessEventsContainer
         </div>
      );
   }
}
