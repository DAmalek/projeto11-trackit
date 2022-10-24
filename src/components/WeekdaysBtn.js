import styled from "styled-components";
import { weekdays } from "../constants/data";


export default function WeekdaysBtn({ SelectedDays, setSelectedDays}) {
    
    function selectDays(v){
        const isSelected = SelectedDays.some(d => v.days === d)
        if (isSelected){
          const newList = SelectedDays.filter(d => v.days !== d)
          setSelectedDays(newList);
        } else{
          setSelectedDays([...SelectedDays, v.days]) 
        }
      }
    
    return (
      <>
        <Weekdiv>
          {weekdays.map((v, i) => (
            <Weekbtn
              onClick={() => selectDays(v)}
              SelectedDays={SelectedDays}
              clickedbtn={v.days}
              key={i}
            >
              {v.letter}
            </Weekbtn>
          ))}
        </Weekdiv>
      </>
    );
}

const Weekdiv = styled.div`
  display: flex;
  width: 300px;
  //padding-bottom: 15px;
  
  margin-left: 18px;
`

const Weekbtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
  margin: 3px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.SelectedDays.includes(props.clickedbtn) ? '#CFCFCF' : '#fffff')};
  color: ${(props) => (props.SelectedDays.includes(props.clickedbtn) ? '#ffffff' : '#dbdbdb')};
`;