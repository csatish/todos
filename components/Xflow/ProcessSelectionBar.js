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
         <div id="processSelection" className="alignItems-y-center">
            <div id="sideMenuDisplayButton">
               <img className="inheritedWH" src="/media/xflow/3.0_UI/logo-blk-rs.png" onClick={this.showMenu} />
            </div>
            <div>
               this is top container
            </div>
         </div>
      );
   }
}
