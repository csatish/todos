import React from 'react'
import Component from './BaseComponent'
import {ProcessEvents} from './ProcessEvents'

export class DetailContainer extends Component {
   constructor(props, context) {
      super(props, context);

      this.state = {

      }
      this._bind('handleResize')
   }

   componentDidMount(){
      var self = this;
      $(window).resize(function() {
         self.handleResize();
      });
   }
   componentWinUnmount(){
      $(window).off("resize");
   }

   getResizeStyles() {
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
      return {mainStyle, processEventStyle}
   }

   handleResize() {
      var styles = this.getResizeStyles();
      $(this.refs.mainContainer).css(styles.mainStyle);
      if(this.childRef && this.childRef.refs.processEvents) {
         $(this.childRef.refs.processEvents).css(styles.processEventStyle);
      }
   }


   render(){
      var styles = this.getResizeStyles();

      return (
         <div id="detailContainer">
            {
               this.props.isProcessEventShowing ? (
                  <ProcessEvents style={styles.processEventStyle} ref={(ref) => this.childRef=ref}/>
               ) : null
            }

            <div id="mainContainer" ref="mainContainer" style={styles.mainStyle}>
               This is detailContainer
            </div>
         </div>
      );
   }
}
