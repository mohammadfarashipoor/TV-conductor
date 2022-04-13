import React,{useState} from 'react';
import Button from './Button';


function WeekBtn(props) {
  const [button,setButton]=useState(1);
  const week = [
    { id:1 ,
      day:"شنبه"},
    { id: 2,
      day:"یک شنبه"},
    { id:3 ,
      day:"دوشنبه"},
    { id:4 ,
      day:"سه شنبه"},
    { id:5 ,
      day:"چهارشنبه"},
    { id:6 ,
      day:"پنج شنبه"},
    { id:7 ,
      day:"جمعه"}
  ];
  const activeBtn=(item)=>{
    if(item===button){
      return "active";
    }
  }
  const clickBtn = (item) => {
    setButton(item)
    props.selectbtn(item)
  };
  return (
    <div className="d-flex align-items-center flex-wrap p-3 
    ">
    {week.map((item)=>(
      <div className="m-1" key={item.id}  onClick={() =>{clickBtn(item.id)}} id={activeBtn(item.id)}>
        <Button type="secondary" textbutton={item.day}>
        </Button>
      </div>
    ))}
    </div>
  )
}

export default WeekBtn