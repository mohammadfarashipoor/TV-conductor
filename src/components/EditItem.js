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
import Table from "./Table";
import { useFormik } from 'formik';
const EditItem=(props)=> {
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
    const [myname,setMyName]=useState();
    const [special,setSpecial]=useState(false);
    const [explain,setExplain]=useState();
    const [checked, setChecked] = useState([]);
    const [enable,setEnable] = useState(false);
    const [noon,setNoon]=useState();
    const [min,setMin]=useState();
    const [hour,setHour]=useState();
    const [select,setSelect]=useState();
    const [radio,setRadio]=useState();
    const [inputText, setInputText] = useState("");
    const [itemselected,setItemSelected] = useState();
    const [bolcheckboxspecial,setBolCheckboxSpecial] = useState(false);
    const [bolcheckboxenable,setBolCheckboxEnable] = useState(false);
    const [bolcheckboxmyweek,setBolCheckboxMyWeek] = useState(false);
    const [bolcheckboxmytime,setBolCheckboxMyTime] = useState();


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
        try {await axios.post('https://6242dd49b6734894c157e955.mockapi.io/date/d1/project1', data)
        .then(response => console.log(response.data));
        }catch(error){
            console.log(error)
        }
    }
    async function itemSelect(item){
        try {await axios.get(`https://6242dd49b6734894c157e955.mockapi.io/date/d1/project1/${item.id}`)
        .then(response => console.log(response.data));
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        itemSelect(props.itemselected)
        setItemSelected(props.itemselected)
        setDataItem(props.itemselected)
        fetchData()
    }, []); 
    const setDataItem= (item)=>{
        selectName(item.name)
        setExplainItem(item.explain)
        setBolCheckboxSpecial(item.special)
        setBolCheckboxEnable(item.enable)
        setBolCheckboxMyWeek(item.day)
        setBolCheckboxMyTime(item.time)
    }
    const bolcheckboxweek=(id)=>{
        let daily=[];
        bolcheckboxmyweek.map((item)=>{
            daily.push(item.id)
        })
        if(id===1 && daily.indexOf(1)!==-1){
            return true
        }
        if(id===2 && daily.indexOf(2)!==-1){
            return true
        }
        if(id===3 && daily.indexOf(3)!==-1){
            return true
        }
        if(id===4 && daily.indexOf(4)!==-1){
            return true
        }
        if(id===5 && daily.indexOf(5)!==-1){
            return true
        }
        if(id===6 && daily.indexOf(6)!==-1){
            return true
        }
        if(id===7 && daily.indexOf(7)!==-1){
            return true
        }else{
            return false
        }
    }
    const validate = values => {
        const errors = {};
      if (!values.name) {
        errors.name = 'نام را وارد کنید';
      } else if (values.name.length > 15) {
        errors.name = 'نام وارد شده بیشتر از 15 حرف است';
      }
      return errors;
    };
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
        if(formik.values.name!==""){
            setMydata(newItem)
            window.location.replace("/");
        }
    }
    const setMyRadio=(item)=>{
        setRadio(item)
    }

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

    const onchange=(e)=>{
        setMyName(e.target.value);
        formik.values.name = e.target.value;
        setSearch(e.target.value);
        setInputText(e.target.value)
    };
    const onchangeExplain=(e)=>{
        setExplain(e.target.value)
    }
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
      const formik = useFormik({
        initialValues: {
          name: '',
        },
        validate,
        onSubmit: values => {
          return
        },
      });
      const selectName=(name)=>{
          setInputText(name)
      }
      const setExplainItem=(text)=>{
        setExplain(text)
    }
      
  return (
      <>{isLoading ? ComponentLoading(): (
    <div className="p-4">
    <form onSubmit={formik.handleSubmit}>
        <div className="d-flex col-lg-12 flex-wrap">
        <div className="ml-5 col-lg-5 p-0">
        <div className="d-flex flex-wrap">
            <div>نوع برنامه</div>
            <div><InputRadio onChange={setMyRadio} /></div>
        </div>
        <div >
        <OutsideClickHandler
        onOutsideClick={() => {outsideClickHandler()}}>
            <InputBasic onClick={insideClickHandler}
            onInput={onchange}
            onChange={formik.handleChange} 
            placeholder={null}
            value={inputText}
            name={"نام"}
            />
            {formik.errors.name ? <div className="text-danger m-1">* {formik.errors.name}</div> : null}
            {showList && (
                data!==[] ?
                <div className="w-100 listshow bg-white">{filtereduser.map((item)=>(
                    <div onClick={()=>{selectName(item.name)}} className="w-100" key={item.id}><Table  title={item.name}/></div>
                ))}</div>:<div className="bg-white p-2"><div>هیچ برنامه ای وجود ندارد</div></div>
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
            <MyCheckBox boolean={bolcheckboxspecial} options={"برنامه ویژه"}             
            onClick={()=>{setSpecial(!special)}}/>
        </div>
            <div><p className="font-weight-light">این گزینه صرفا جهت نوع نمایش متن و عکس در برتلت " نمایش جدول پخش" کاربرد دارد و در این نمایش ، فقط برنامه هایی نمایش داده می شود که این کزینه انتخاب شده باشد</p></div>
        <div>
            <InputComponent placeholder={null} onChange={handleExplain} onInput={onchangeExplain} component={"textarea"} name={"توضیح"}/>
        </div>
        <div>
            <SelectBox options={selectBox} onClick={handleSelect}/>
        </div>
        <div className="mt-5">
            <div className="mb-2">زمان پخش</div>
            <div className="d-flex flex-wrap">
                <div className="mr-2 ml-2"><SelectBox val={bolcheckboxmytime[0]===2?"بعد از ظهر":"قبل از ظهر"}onClick={handleNoon}  options={selectBox1}/></div>
                <div className="mr-2 ml-2"><SelectBox val={bolcheckboxmytime[1]}onClick={handleMin} options={selectMin}/></div>
                <div className="mr-2 ml-2"><SelectBox val={bolcheckboxmytime[2]}onClick={handleHours} options={selectHours}/></div>
            </div>
        </div>
        <div className="mt-4 mr-3">
                <div className="mb-2">روز های پخش:</div>
                <div>
                {week.map((item)=>(
                    <div className="d-flex m-1"key={item.id} ><MyCheckBox boolean={()=>bolcheckboxweek(item.id)} item={item} onClick={setDay} options={item.day}/>
                    </div>
                ))}
            </div>
        </div>
        <div className="d-flex mt-4"><MyCheckBox boolean={bolcheckboxenable} onClick={()=>setEnable(!enable)} options={"فعال"}/></div>
        <div className="d-flex flex-wrap mt-5">
            <div className="mr-2 ml-2"><Link to="/"><Button type="secondary"textbutton={"انصراف"}/></Link></div>
            <div ><Button submit="submit" onClick={myData} type="primary"textbutton={"ذخیره"}/></div>
        </div> 
        </form>          
    </div>
      )}</>
  )
}

export default EditItem