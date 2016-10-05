import React from 'react'
// import Component from './BaseComponent'
var Component = React.Component;

export class SideMenuContainer extends Component {
   constructor(props, context) {
      super(props, context);

      this.state = {
      }
   }

   onCloseClick(){
      $(this.refs.sideMenuContainer).width("0px");
      // $(this.refs.sideMenuContainer).hide();
   }

   render(){
      var menuArray = [];
      var menuOptions = this.props.menuOptions;
      for(var i in menuOptions) {
         var option = menuOptions[i];
         menuArray.push(
            <div key={option.key} className="sideMenuItem">
               {option.title}
            </div>
         );
      }

      return (
         <div id="sideMenuContainer" ref="sideMenuContainer">
            <button className="close" onClick={this.onCloseClick.bind(this)}>&times;</button>
            {menuArray}
         </div>
      );
   }
}
