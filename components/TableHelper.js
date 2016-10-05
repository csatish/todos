import React from 'react'
import {Table,Column,Cell} from 'fixed-data-table'
import ExampleImage from './image_helper/ExampleImage'


var tblWidth = 0;

var CustomCell = React.createClass({
  handleClick:function(e){
    console.log("Row:",this.props.rowIndex);
    console.log("Col:",this.props.col);
  },
  render:function(){
    return(
      <Cell align="center" onClick={this.handleClick} style={{backgroundColor:"#AAA"}}>Hello there</Cell>
    );
  }
});


function columnBuilder(columns, dataList,sortColKey,sortDirection,onSortChange){
    var columnsArray = [];
    tblWidth = 0;
    var colWidth = 0;
    for(var i in columns){
        var column = columns[i];
        var colUniqueKey = column.key+"_col";
        var sortDir = "";

        if(column.colWidth != undefined) {
          colWidth = column.colWidth;
        }
        else {
          colWidth = 100;
        }
        tblWidth += colWidth;

        switch(column.key){
            case "currentEvent":
              columnsArray.push(
                <Column key={colUniqueKey}
                    columnKey={column.key}
                    header={<Cell columnKey={column.key} sortDir={sortDir} onSortChange={onSortChange}>{column.name}</Cell>}
                    cell={<CurrentEventCell dataList={dataList} col={column.key} />}
                    width={colWidth}
                />)
            break;

            case "associtedStaff":
              console.log("inserted")
              columnsArray.push(
                <Column key={colUniqueKey}
                    columnKey={column.key}
                    header={<Cell columnKey={column.key} sortDir={sortDir} onSortChange={onSortChange}>{column.name}</Cell>}
                    cell={<AssociatedStaffCell dataList={dataList} col={column.key} />}
                    width={colWidth}
                />)
            break;
            default:

                if(sortColKey == column.key){
                    sortDir = sortDirection;
                }
                columnsArray.push(
                  <Column key={colUniqueKey}
                      columnKey={column.key}
                      header={<Cell columnKey={column.key} sortDir={sortDir} onSortChange={onSortChange}>{column.name}</Cell>}
                      cell={<TextCell dataList={dataList} col={column.key} />}
                      width={colWidth}
                  />)
            break;
        }
    }
    return columnsArray;
}


function prepareColumnsOptions () {
  return [
          {
              name: 'Patient Name',
              key: 'patientName',
              resizable: true,
              filterable: true,
              sortable: true,
              options: [],
              searchable: true,
              inputType : 'textbox',
              colWidth: 130

          },
          {
              name: 'Patient Id',
              key: 'patientId',
              resizable: true,
              filterable: true,
              sortable: true,
              options: [],
              searchable: true,
              inputType : 'textbox',
              colWidth:120
          },
          {
              name: 'Experience Time',
              key: 'experienceTime',
              resizable: true,
              filterable: true,
              sortable: true,
              options: [],
              searchable: false,
              inputType : 'textbox',
              colWidth:100
          },
          {
              name: 'Current Event',
              key: 'currentEvent',
              resizable: true,
              filterable: true,
              sortable: true,
              options: [],
              searchable: true,
              inputType: 'currentEvent',
              colWidth:120
          },
          {
              name: 'Associted Staff',
              key: 'associtedStaff',
              resizable: true,
              filterable: true,
              sortable: true,
              options: [],
              searchable: true,
              inputType: 'associtedStaff',
              colWidth:130
          },
          {
              name: 'Escalations',
              key: 'escalations',
              resizable: true,
              filterable: true,
              sortable: true,
              options: [],
              searchable: true,
              inputType: 'escalations',
              colWidth:150
          },
          {
              name: 'Comments',
              key: 'comments',
              resizable: true,
              filterable: true,
              sortable: true,
              options: [],
              searchable: true,
              inputType: 'comments',
              colWidth:180
          }
        ];
}

function prepareRowData () {
  return [
          {
              patientName: "Alexander",
              patientId: "KIMS9842352",
              experienceTime: "05:00 hrs",
              currentEvent: "slot confirmation",
              associatedStff : "1,2,3",
              escalations: "delay 1, delay 2",
              comments: "Slot allotment pending"
          },
          {
            patientName: "Peter",
            patientId: "KIMS9812352",
            experienceTime: "02:00 hrs",
            currentEvent: "Registration",
            associatedStff : "1,2,3",
            escalations: "delay 1, delay 2",
            comments: "Slot allotment pending"
          },
          {
            patientName: "Jack",
            patientId: "KIMS9812352",
            experienceTime: "02:00 hrs",
            currentEvent: "Registration",
            associatedStff : "1,2,3",
            escalations: "delay 1, delay 2",
            comments: "Slot allotment pending"
          },
          {
            patientName: "Albert",
            patientId: "KIMS9812352",
            experienceTime: "02:00 hrs",
            currentEvent: "Registration",
            associatedStff : "1,2,3",
            escalations: "delay 1, delay 2",
            comments: "Slot allotment pending"
          },
          {
            patientName: "Austin",
            patientId: "KIMS9812352",
            experienceTime: "02:00 hrs",
            currentEvent: "Registration",
            associatedStff : "1,2,3",
            escalations: "delay 1, delay 2",
            comments: "Slot allotment pending"
          },
          {
            patientName: "Rowling",
            patientId: "KIMS9812352",
            experienceTime: "02:00 hrs",
            currentEvent: "Registration",
            associatedStff : "1,2,3",
            escalations: "delay 1, delay 2",
            comments: "Slot allotment pending"
          },
          {
            patientName: "Stefen",
            patientId: "KIMS9812352",
            experienceTime: "02:00 hrs",
            currentEvent: "Registration",
            associatedStff : "1,2,3",
            escalations: "delay 1, delay 2",
            comments: "Slot allotment pending"
          }
        ];
}



const TextCell = ({rowIndex, dataList, col}) => (
    <Cell>
      {dataList[rowIndex][col]}
    </Cell>
);


const imgStyle = {height:"50"};
const ImageCell = ({rowIndex, dataList, col}) => (
  <ExampleImage
    src={dataList[rowIndex][col]}
  />
);

var CurrentEventCell = React.createClass({
  render:function(){
    return (
      <Cell>
        <div className="pull-left">
          Image
        </div>
        <div className="pull-right">
          XXXXX
        </div>
      </Cell>
    )
  }
});

var AssociatedStaffCell = React.createClass({
  render:function(){
    return (
      <Cell>
        <div className="pull-left">
          Image
        </div>
        <div className="pull-left">
          image
        </div>
        <div className="pull-left">
          Image
        </div>
      </Cell>
    )
  }
});

var TableHelper = React.createClass({
    getInitialState:function(){
        var data = [];
        return {dataList:data};
    },
    onRowDoubleClick:function(){
    },
    onRowClick:function(event, rowIndex){
    },
    render:function(){

        var dataList = prepareRowData();
        var colOptions = prepareColumnsOptions();
        var columns = columnBuilder(colOptions,dataList);

        var rowHeight = 50, headerHeight = 50;
        var tableHeight = rowHeight*dataList.length;
        console.log(">",tableHeight);
        tableHeight = tableHeight + headerHeight;
        console.log(">>",tableHeight);

        var headerStyle = {width:"100%", height:"40px",backgroundColor:"#CCC",justifyContent:"center", alignContent:"center", verticalAlign: "middle"}
        var tableContainerStyle = {width:"100%", height:"350px", overflow:"scroll"}
        var insightsStyle1 = {width:"300px", height:"300px", backgroundColor:"#CCC"}
        var insightsStyle2 = {width:"300px", height:"300px", backgroundColor:"#AAA"}
        var dropDownStyle = {borderRadius:"20px"};


        return(<div>
                  <div style={headerStyle}>

                    <div style={{height:"100%"}}>
                      <span className="pull-left">Status: </span>
                      <div className="dropdown pull-left">
                        <button className="btn btn-default dropdown-toggle" style={dropDownStyle} data-toggle="dropdown">
                          Dropdown Example
                          <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                          <li><a href="#">HTML</a></li>
                          <li><a href="#">CSS</a></li>
                          <li><a href="#">JavaScript</a></li>
                        </ul>
                      </div>

                      <button className="btn btn-default pull-right">
                        <span className="glyphicon glyphicon-refresh"></span>
                      </button>

                      <button className="btn btn-default pull-right">
                        <span className="glyphicon glyphicon-filter"></span>
                      </button>
                    </div>

                  </div> {/*End of headerStyle Div*/}

                  <div style={tableContainerStyle}>
                    <Table
                        rowHeight={rowHeight}
                        headerHeight={headerHeight}
                        rowsCount={dataList.length}
                        width={tblWidth}
                        height={tableHeight}
                        onRowDoubleClick={this.onRowDoubleClick}
                        onRowClick={this.onRowClick}
                        >
                        {columns}
                      </Table>
                    </div>

                    <div>
                      <div className="pull-left" style={insightsStyle1}>
                        Insight1 div
                      </div>
                      <div className="pull-left" style={insightsStyle2}>
                        Insight1 div
                      </div>
                      <div className="pull-left" style={insightsStyle1}>
                        Insight1 div
                      </div>
                    </div>

                </div>
               );
    }
});

export default TableHelper
