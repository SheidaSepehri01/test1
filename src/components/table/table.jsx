import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset,start } from "../../store/features/inputSlice";
import { clicked } from "../../store/features/tableSlice";

const Table = () => {
  
  let inputValue = useSelector((state) => state.input.value);
  const dispatch = useDispatch();
  let clickedBlock = useSelector((state) => state.table.clickedBlock);

  let activeBlocks = getActiveBlocks(clickedBlock, Number(inputValue))

 let grid = {
    gridTemplateColumns:`${setGridStyle(inputValue)}`,
    gridTemplateRows:`${setGridStyle(inputValue)}`
 }

  const createTable = (num) => {
    let blocks = [];
    for (let i = 0; i < num; i++) {
      blocks.push(
        <div 
        key={i} 
        onClick={() => dispatch(clicked(i))}
        className={activeBlocks.includes(i+1) ?'active block':'block'}
        >
          block{i + 1}
        </div>
      );
    }
    return blocks;
  };

  let blocks = createTable(inputValue * inputValue);

  return (
    <div className="table">
    <button className="back-btn" onClick={()=>dispatch(start(false))}>GO Back</button>
      <h1>
        {inputValue} X {inputValue} Table
      </h1>
      <div className="blocks" style={grid}>{blocks}</div>
    </div>
  );
};

const setGridStyle = (num)=>{
let style =''
  for(let i =0;i<num;i++){
style += '1fr '
}
return style
}

const getActiveBlocks=(main,inputValue)=>{
let activeBlocks =[]

for(let i =1 ;i<=(inputValue*inputValue);i++){

    if(i===(main + inputValue) & i<=(inputValue * inputValue) ){
      activeBlocks.push(i)
    
    } else if(i===(main - inputValue)){
      activeBlocks.push(i)
    
    }else if(i=== main){
      activeBlocks.push(i)
    
    }
    else if(i===(main + 1) & (main % inputValue !=0)){
      activeBlocks.push(i)
    
    }else if(i===(main - 1) & (i % inputValue !=0)){
      activeBlocks.push(i)
  }
}
return activeBlocks
}



export default Table;
