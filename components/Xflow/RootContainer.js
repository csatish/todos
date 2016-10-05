import React from 'react'
import Component from './BaseComponent'
import {BarMenu} from './BarMenu'
import {ExperienceStats} from './ExperienceStats'
import {ProcessSelectionBar} from './ProcessSelectionBar'
import {DetailContainer} from './DetailContainer'
import {SideMenuContainer} from './SideMenuContainer'

const IMAGE_MENU_ITEM = 0;
const REGULAR_MENU_ITEM = 1;
const MENU_ITEM_DESELECTED = 0;
const MENU_ITEM_SELECTED = 1;


// function getAllMethods(object) {
//    Object.getOwnPropertyNames(object).filter(function(property){
//       console.log("1>",property)
//       if(typeof object[property] == 'function'){
//          console.log("2>",property);
//       }
//    });
// }

export default class RootContainer extends Component {

   constructor(props, context) {
      super(props, context);

      var menuOptions = [
       {
          title:"Bot",
          key:"bot_menu",
          imageActive:"/media/xflow/3.0_UI/bot-msg-active.png",
          imageInactive:"/media/xflow/3.0_UI/bot-msg.png",
          imageInactiveSS:"/media/xflow/3.0_UI/bot-msg.png",
          type:IMAGE_MENU_ITEM,
          status:MENU_ITEM_SELECTED,

       },
       {
          title:"PRIORITY",
          key:"priority",
          imageActive:"/media/xflow/3.0_UI/priority-active.png",
          imageInactive:"/media/xflow/3.0_UI/priority.png",
          imageInactiveSS:"/media/xflow/3.0_UI/priority-res.png",
          messageCount: 0,
          type:REGULAR_MENU_ITEM,
          status:MENU_ITEM_DESELECTED
       },
       {
          title:"FLOWS",
          key:"flows",
          imageActive:"/media/xflow/3.0_UI/flows-active.png",
          imageInactive:"/media/xflow/3.0_UI/flows.png",
          imageInactiveSS:"/media/xflow/3.0_UI/flows-res.png",
          messageCount: 0,
          type:REGULAR_MENU_ITEM,
          status:MENU_ITEM_DESELECTED
       },
       {
          title:"RANKING",
          key:"ranking",
          imageActive:"/media/xflow/3.0_UI/performance-active.png",
          imageInactive:"/media/xflow/3.0_UI/performance.png",
          imageInactiveSS:"/media/xflow/3.0_UI/performance-res.png",
          messageCount: 0,
          type:REGULAR_MENU_ITEM,
          status:MENU_ITEM_DESELECTED
       }
     ];

      this.state = {
         menuOptions:menuOptions
      }

       this._bind('showSideMenu','handleMenuChange')
   }

   onResize(){

   }
   showSideMenu(){
      $("#sideMenuContainer").width("250px");
      // $("#sideMenuContainer").show();

   }

   handleMenuChange(selectedMenu) {
      var menuOptions = this.state.menuOptions;
      for (var i in menuOptions) {
         var menuOption = menuOptions[i];
         if (selectedMenu.key == menuOption.key) {
            menuOption.status =  MENU_ITEM_SELECTED;
         }
         else {
            menuOption.status =  MENU_ITEM_DESELECTED;
         }
      }
      this.forceUpdate();
   }

   render(){
      var menuOptions = this.state.menuOptions;
      var isProcessEventShowing = false;
      for (var i in this.state.menuOptions) {
         var option = this.state.menuOptions[i];
         if (option.key == "bot_menu" && option.status == MENU_ITEM_SELECTED) {
            isProcessEventShowing = true;
         }
      }

      return (
         <div id="rootContainer">
            <BarMenu menuOptions={this.state.menuOptions} handleMenuChange={this.handleMenuChange}/>
            <div id="pageContainer">
               <ProcessSelectionBar showSideMenu={this.showSideMenu} />
               <ExperienceStats />
               <DetailContainer isProcessEventShowing={isProcessEventShowing} />
            </div>
            <SideMenuContainer menuOptions={this.state.menuOptions} />
         </div>
      )
  }
}


/*

*/
