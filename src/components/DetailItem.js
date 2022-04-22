/* eslint-disable array-callback-return */
import React,{useState,useEffect} from 'react';
import InputRadio from './InputRadio';
import InputBasic from './InputBasic';
import InputComponent from './InputComponent'
import '../App.css';
import {Link} from "react-router-dom";
import ClayLoadingIndicator from '@clayui/loading-indicator';
import axios from "axios";
import MyCheckBox from './MyCheckBox';
import SelectBox from './SelectBox'
import Button from './Button';
import OutsideClickHandler from "./OutsideClickHandler";
import Table from "./Table"


function DetailItem() {
    const [search,setSearch] = useState("");
    const [showList,setShowList] = useState(false)
    const [data,setData]=useState([{
        title: "تمام",
        value: "1"
        },
        {
        title: "Option 2",
        value: "2"
        }]);
    const [isLoading,setIsLoading] = useState(true);
    const [myname,setMayName]=useState();
    const [special,setSpecial]=useState(false);
    const [explain,setExplain]=useState();
    const [checked, setChecked] = useState([]);
    const [enable,setEnable] = useState(false);
    const [noon,setNoon]=useState();
    const [min,setMin]=useState();
    const [hour,setHour]=useState();
    const [select,setSelect]=useState();
    const [radio,setRadio]=useState();
    async function fetchData() {
        try {
            const result = await axios.get(
                "https://6242dd49b6734894c157e955.mockapi.io/date/d1/project1"
                );
                setData(result.data)
                setIsLoading(false)
              } catch (error) {
                console.error(error);
        }
        }
    async function setMydata(data){
        await axios.post('https://6242dd49b6734894c157e955.mockapi.io/date/d1/project1', data)
          .then(response => console.log(response.data));
    }
    const setMyRadio=(item)=>{
        setRadio(item)
    }
    const myData=()=>{
        let newItem = {
            name: myname ,
            time: [noon,hour,min],
            day : checked,
            type: radio,
            explain:explain,
            status: enable,
            special:special
        }
        setMydata(newItem)
    }
        useEffect(() => {
          fetchData();
        }, []);    

    const setDay=(item,value)=>{
        let updateList = [...checked];
        if(value){
            for(var i = 0; i < updateList.length; i++) {
                if(updateList[i].id === item.id) {
                    updateList.splice(i, 1);
                }}
        }else{
            updateList = [...checked,item];
        }
        setChecked(updateList) 
    }
    const handelEnable=()=>{
        setEnable(!enable);
    }
    const handleExplain = (e) => {
         setExplain(e.target.value)
    };
    const handleNoon = (e) => {
        setNoon(e.target.value)
    }
    const handleMin = (e) => {
        setMin(e.target.value)
    }
    const handleHours = (e) => {
        setHour(e.target.value)
    }
    const handleSelect =(e)=>{
        setSelect(e.target.value)
    }

    onchange = e => {
        setMayName(e.target.value);
        setSearch(e.target.value);
      };
      const filtereduser = data.filter(item => {
          if(item.name!==undefined){
              return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
          }
      });

     const insideClickHandler=()=>{
        setShowList(true)
     }
     const outsideClickHandler =()=>{
        setShowList(false)
     }
    const selectBox=[{
        label: "تمام",
        value: "1"
        },
        {
        label: "Option 2",
        value: "2"
        }];
    const selectBox1=[{ 
            label : "بعد از ظهر",
            value: "1"
        },{
            label :"قبل از ظهر",
            value: "2"
        }
    ]
    const selectMin=
        [
            { label: "00: ", value: 0 },
            { label: "01: ", value: 1 },
            { label: "02: ", value: 2 },
            { label: "03: ", value: 3 },
            { label: "04: ", value: 4 },
            { label: "05: ", value: 5 },
            { label: "06: ", value: 6 },
            { label: "07: ", value: 7 },
            { label: "08: ", value: 8 },
            { label: "09:", value: 9 },
            { label: "10:", value: 10 },
            { label: "11:", value: 11 },
            { label: "12:", value: 12 },
            { label: "13:", value: 13 },
            { label: "14:", value: 14 },
            { label: "15:", value: 15 },
            { label: "16:", value: 16 },
            { label: "17:", value: 17 },
            { label: "18:", value: 18 },
            { label: "19:", value: 19 },
            { label: "20:", value: 20 },
            { label: "21:", value: 21 },
            { label: "22:", value: 22 },
            { label: "23:", value: 23 },
            { label: "24:", value: 24 },
            { label: "25:", value: 25 },
            { label: "26:", value: 26 },
            { label: "27:", value: 27 },
            { label: "28:", value: 28 },
            { label: "29:", value: 29 },
            { label: "30:", value: 30 },
            { label: "31:", value: 31 },
            { label: "32:", value: 32 },
            { label: "33:", value: 33 },
            { label: "34:", value: 34 },
            { label: "35:", value: 35 },
            { label: "36:", value: 36 },
            { label: "37:", value: 37 },
            { label: "38:", value: 38 },
            { label: "39:", value: 39 },
            { label: "40:", value: 40 },
            { label: "41:", value: 41 },
            { label: "42:", value: 42 },
            { label: "43:", value: 43 },
            { label: "44:", value: 44 },
            { label: "45:", value: 45 },
            { label: "46:", value: 46 },
            { label: "47:", value: 47 },
            { label: "48:", value: 48 },
            { label: "49:", value: 49 },
            { label: "50:", value: 50 },
            { label: "51:", value: 51 },
            { label: "52:", value: 52 },
            { label: "53:", value: 53 },
            { label: "54:", value: 54 },
            { label: "55:", value: 55 },
            { label: "56:", value: 56 },
            { label: "57:", value: 57 },
            { label: "58:", value: 58 },
            { label: "59:", value: 59 },
            { label: "60:", value: 60 }
          ];
    const selectHours =[
            { label: "00 ", value: 0 },
            { label: "01 ", value: 1 },
            { label: "02 ", value: 2 },
            { label: "03 ", value: 3 },
            { label: "04 ", value: 4 },
            { label: "05 ", value: 5 },
            { label: "06 ", value: 6 },
            { label: "07 ", value: 7 },
            { label: "08 ", value: 8 },
            { label: "09", value: 9 },
            { label: "10", value: 10 },
            { label: "11", value: 11 },
            { label: "12", value: 12 },
            
    ]
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
      const ComponentLoading = () => {
        return <div className="loading"><ClayLoadingIndicator small/></div>;
      };
  return (
      <>{isLoading ? ComponentLoading(): (

    <div className="p-4">
        <div className="m-2">نام برنامه</div>
        <div className="d-flex col-lg-12 flex-wrap">
        <div className="ml-5 col-lg-5 p-0">
        <div className="d-flex flex-wrap">
            <div>نوع برنامه</div>
            <div><InputRadio onChange={setMyRadio}/></div>
        </div>
        <div >
        <OutsideClickHandler
        onOutsideClick={() => {outsideClickHandler()}}>
            <InputBasic onClick={insideClickHandler} onChange={onchange} placeholder={null}  name={"نام"}/>
            {showList && (
                data!==[] ?
                filtereduser.map((item)=>(
                    <div className="listshow position-absolute w-100" key={item.id}><Table title={item.name}/></div>
                )):<div>هیچ برنامه ای وجود ندارد</div> 
            )}
        </OutsideClickHandler>

        </div>
        <div>
        <div className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label">تصویر شاخص</label>
            <input className="form-control p-1 cursor-pointer" type="file" id="formFileMultiple" multiple/>
            </div>
        </div>
        </div>
        <div className="col-lg-5">
        </div>
        </div>
        <div className="d-flex mt-5">
            <MyCheckBox options={"برنامه ویژه"} onClick={()=>{setSpecial(!special)}}/>
        </div>
            <div><p className="font-weight-light">این گزینه صرفا جهت نوع نمایش متن و عکس در برتلت " نمایش جدول پخش" کاربرد دارد و در این نمایش ، فقط برنامه هایی نمایش داده می شود که این کزینه انتخاب شده باشد</p></div>
        <div>
            <InputComponent placeholder={null} onClick={handleExplain} component={"textarea"} name={"توضیح"}/>
        </div>
        <div>
            <SelectBox options={selectBox} onClick={handleSelect}/>
        </div>
        <div className="mt-5">
            <div className="mb-2">زمان پخش</div>
            <div className="d-flex flex-wrap">
                <div className="mr-2 ml-2"><SelectBox onClick={handleNoon} options={selectBox1}/></div>
                <div className="mr-2 ml-2"><SelectBox onClick={handleMin} options={selectMin}/></div>
                <div className="mr-2 ml-2"><SelectBox onClick={handleHours} options={selectHours}/></div>
            </div>
        </div>
        <div className="mt-4 mr-3">
                <div className="mb-2">روز های پخش:</div>
                <div>
                {week.map((item)=>(
                    <div className="d-flex m-1"key={item.id} ><MyCheckBox item={item} onClick={setDay} options={item.day}/>
                    </div>
                ))}
            </div>
        </div>
        <div className="d-flex mt-4"><MyCheckBox onClick={handelEnable} options={"فعال"}/></div>
        <div className="d-flex flex-wrap mt-5">
            <div className="mr-2 ml-2"><Link to="/"><Button type="secondary"textbutton={"انصراف"}/></Link></div>
            <div ><Link to="/"><Button onClick={myData} type="primary"textbutton={"ذخیره"}/></Link></div>
        </div>           
    </div>
      )}</>
  )
}

export default DetailItem