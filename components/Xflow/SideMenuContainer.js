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

   onMenuClick(){

   }

   render(){
      var menuArray = [];
      var menuOptions = this.props.menuOptions;
      for(var i in menuOptions) {
         var option = menuOptions[i];
         menuArray.push(
            <div key={option.key} className="sideMenuItem alignItems-y-center" onClick={this.onMenuClick}>
               <div className="marginLeft10 marginRight10">
                  <img src={option.imageInactiveSS} style={{width:"20px", height:"20px"}}/>
               </div>
               <div>
                  {option.title}
               </div>
            </div>
         );
      }

      return (
         <div id="sideMenuContainer" ref="sideMenuContainer">
            <div className="inheritedW" style={{height:"60px"}}>
               <h3 className="pull-left marginLeft10" style={{fontSize:"18px", fontWeight:"300"}}>Xflow menu</h3>
               <button className="close marginRight10 marginTop5" style={{color:"#4D4D4D"}} onClick={this.onCloseClick.bind(this)}>&times;</button>
            </div>
            {menuArray}
         </div>
      );
   }
}
