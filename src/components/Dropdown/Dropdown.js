import React,{useState, useRef, useEffect} from 'react';
import './Dropdown.css'
import Hr from '../Hr/Hr';
import { selectOptions } from '../../Redux/Reducers/appInfoSlice';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

const Dropdown = ({options}) => {

  const dispatch = useDispatch();
    
const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const dropdownRef=useRef(null)

  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  useEffect(()=>{
    if(selectedOption!=="")
    dispatch(selectOptions(selectedOption))
  },[selectedOption])



  return (
   <div>{isDropdownOpen && (
    <div className="custom-dropdown" ref={dropdownRef}>
      {options.map((option) => (
        <div
          key={option}
          className="dropdown-option"
          onClick={() => handleOptionSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  )}</div>
  )
}

export default Dropdown