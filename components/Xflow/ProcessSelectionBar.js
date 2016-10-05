import React from 'react'
import Component from './BaseComponent'

export class ProcessSelectionBar extends Component {
   constructor(props, context) {
      super(props, context);

      this.state = {
      }
      this._bind('showMenu')
   }

   showMenu(){
      if(this.props.showSideMenu){
         this.props.showSideMenu();
      }
   }

   render(){

      return (
         <div id="processSelection">
            <button id="sideMenuDisplayButton" className="btn btn-default" onClick={this.showMenu}>
               xflowIcon
            </button>
            this is top container
         </div>
      );
   }
}
