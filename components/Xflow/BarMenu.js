import React from 'react'
import Component from './BaseComponent'

const IMAGE_MENU_ITEM = 0;
const REGULAR_MENU_ITEM = 1;
const MENU_ITEM_DESELECTED = 0;
const MENU_ITEM_SELECTED = 1;

export class BarMenu extends Component {
   constructor(props, context) {
      super(props, context);

      this.state = {
      }

      this._bind('onMenuClick')
   }

   onMenuClick(selectedMenu) {
      if(this.props.handleMenuChange) {
         this.props.handleMenuChange(selectedMenu);
      }
   }


   render() {
      var menuArray = [];
      var menuOptions = this.props.menuOptions;

      for(var i in menuOptions) {
         var option = menuOptions[i];
         menuArray.push(
            <BarMenuItem key={option.key} option={option} onMenuClick={this.onMenuClick} />
         );
      }

      return (
         <div id="barMenu_container">
            <div id="barMenuInner">
               {menuArray}
            </div>
         </div>
      );
   }
}


export class BarMenuItem extends Component {
   constructor(props, context) {
      super(props, context);

      this.state = {
      }
      this._bind('onClick')

   }

   onClick() {
      if(this.props.onMenuClick) {
         this.props.onMenuClick(this.props.option);
      }
   }

   render() {
      var option = this.props.option;
      var imgSrc = "";
      var titleCSSClass = ""
      if(option.status == MENU_ITEM_SELECTED) {
         imgSrc = option.imageActive;
         titleCSSClass = "fontActiveMenu";
      }
      else {
         imgSrc = option.imageInactive;
         titleCSSClass = "fontInactiveMenu";
      }

      if(option.type == REGULAR_MENU_ITEM) {
         return (
            <div className="barMenu alignItems-xy-center" onClick={this.onClick}>
               <div className="barMenuContent alignItems-xy-center">

                  <div className="content-y-center content-x-center">
                     <div className="content-x-center">
                        <div className="circleBase">
                           <div className="circleFill">
                           </div>
                           <div className="circleValue alignItems-xy-center">
                              {option.messageCount}
                           </div>
                        </div>
                        <img className="barMenuImg" src={imgSrc}/>
                     </div>
                     <div className={titleCSSClass}>
                        {option.title}
                     </div>
                  </div>
               </div>
            </div>
         );
      }
      else {
         return (
            <div className="barMenu alignItems-xy-center" onClick={this.onClick}>
               <div className="barMenuContent alignItems-xy-center">
                  <div className="content-y-center content-x-center">
                     <div className="content-xy-center">
                        <img className="barMenuImg" src={imgSrc} style={{width:"45px", height:"45px"}}/>
                     </div>
                  </div>
               </div>
            </div>
         );
      }
   }
}
