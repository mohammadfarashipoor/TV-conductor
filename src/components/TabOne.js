import SelectBox from './SelectBox';
import InputBasic from './InputBasic';
import Button from './Button';
import MyTable from './MyTable';
import {useState} from 'react'
import {Link} from "react-router-dom";

function TabOne(props) {
    const {data}= props;
    const [search,setsearch] = useState("");
    const [mydata,setMyData] = useState(data);
    const selectBox1=[{
      label: "تمام",
        value: "1"
        },
        {
        label: "Option 2",
        value: "2"
        }];
    const selectBox2=[{
        label: "تمام",
        value: "1"
      },
      {
        label: "سیما",
        value: "2"
      },
      {
        label: "صدا",
        value: "3"
      }
    ];
      onchange = e => {
        setsearch(e.target.value);
        let mysearch =[...data]
        setMyData(mysearch.filter(item =>{
          return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1}))
     
      }
    const handleFilter =(e)=>{
      let search =[...data]
      if(e.target.value==="2"){
        setMyData(search.filter((item)=>(item.type===1)))
      }
      if(e.target.value==="3"){
        setMyData(search.filter((item)=>(item.type===2)))
        
      }if(e.target.value==="1"){
        setMyData(search)
      }
    }
      
  return (
    <div>            
    <div className="ml-5 mr-5 mt-2">
    <div className="bg-gray p-3 rounded">
      <div className="d-flex align-items-center flex-wrap pl-3 pr-3"><div className="m-1">انطباق با</div><div className="m-1"><SelectBox options={selectBox1}/></div><div className="m-1">فیلد های زیر</div></div>
      <div className="d-flex w-100 col-lg-12 flex-lg-nowrap flex-wrap">
        <div className="w-100 col-lg-6 col-sm-12"><InputBasic onChange={onchange} placeholder={null} onClick={null} name="نام" /></div>
        <div className="w-100 col-lg-6 col-sm-12"><div className="mb-1 ">نوع برنامه</div><div><SelectBox 
        options={selectBox2}
        onClick={handleFilter}
        /></div></div> 
        </div>
        <div className="mb-2 mt-2">
        <Button type="secondary" textbutton="جست و جو"/>
        </div>
    </div>
    <div className="mb-2 mt-2">
      <Link to="/add">
      <Button type="secondary" textbutton="افزودن برنامه" onClick={null}/>
    </Link>
    </div>
    <div ><MyTable data={mydata}/></div>
  </div></div>
  )
}

export default TabOne