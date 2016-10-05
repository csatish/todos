import React from 'react'
import Component from './BaseComponent'
import {ProcessEvents} from './ProcessEvents'

export class DetailContainer extends Component {
   constructor(props, context) {
      super(props, context);

      this.state = {

      }
      // this._bind('showMenu')
   }

   handleMainRect() {
      if(this.props.isProcessEventShowing) {

      }
      else {

      }
   }


   render(){

      // #mainContainer {
      //    width: calc(100% - 70px);
      //    height : 100%;
      //    float: right;
      // }
      //
      // #processEvents {
      //    width: 70px;
      //    height: 100%;
      //    float: left;
      // }
      var mainStyle = {};
      var processEventStyle = {};
      if(this.props.isProcessEventShowing) {
         var mq = window.matchMedia("(max-width: 550px)" );
         if (mq.matches) { //less than 550, needed for mobile UI
            mainStyle = {height:"100%", float:"right", width:"calc(100% - 70px)"};
            processEventStyle = {height:"100%", float:"left", width:"70px"};
         }
         else {
             mainStyle = {height:"calc(100% - 86px)", float:"none", width:"100%"};
             processEventStyle = {height:"86px", float:"none", width:"100%"};
         }
      }
      else {
         mainStyle = {height:"100%", float:"none", width:"100%"};
      }

      return (
         <div id="detailContainer">
            {
               this.props.isProcessEventShowing ? (
                  <ProcessEvents style={processEventStyle}/>
               ) : null
            }

            <div id="mainContainer" style={mainStyle}>
               This is detailContainer
            </div>
         </div>
      );
   }
}
