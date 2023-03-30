import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { start, reset, setValue } from "../../store/features/inputSlice";

const InputPage = () => {
  let inputValue = useSelector((state) => state.input.value);
  const dispatch = useDispatch();


  const handleSubmit = (e) => {

    e.preventDefault();
    if(inputValue > 0){
    dispatch(start(true))
    }
  };

  return (
    <div>

      <form onSubmit={(e)=>handleSubmit(e)} className='form'>
        <label>Insert a number higher than 0</label>

        <input
          type={"number"}
          onChange={(e)=>dispatch(setValue(e.target.value))}
          value={inputValue}
        />

        <input type={"submit"} className='submit' />
        
      </form>
    </div>
  );
};

export default InputPage;
