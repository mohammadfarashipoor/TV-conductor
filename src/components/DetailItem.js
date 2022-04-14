import React,{useState} from 'react';
import InputRadio from './InputRadio';
import InputBasic from './InputBasic';
import '../App.css';
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

    onchange = e => {
        setSearch(e.target.value);
      };
      const filtereduser = data.filter(data => {
        return data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
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
  return (
    <div className="p-4">
        <div className="m-2">نام برنامه</div>
        <div className="d-flex col-lg-12 flex-wrap">
        <div className="ml-5 col-lg-5 p-0">
        <div className="d-flex flex-wrap">
            <div>نوع برنامه</div>
            <div><InputRadio/></div>
        </div>
        <div >
        <OutsideClickHandler
        onOutsideClick={() => {outsideClickHandler()}}>
            <InputBasic onClick={insideClickHandler} onChange={onchange}  name={"نام"}/>
            {showList && (
                <div className="listshow position-absolute w-100"><Table/></div>
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
        <img src="https://picsum.photos/200/300" alt=""/>
        </div>
        </div>
        <div className="d-flex mt-5">
            <MyCheckBox options={"برنامه ویژه"}/>
        </div>
            <div><p className="font-weight-light">این گزینه صرفا جهت نوع نمایش متن و عکس در برتلت " نمایش جدول پخش" کاربرد دارد و در این نمایش ، فقط برنامه هایی نمایش داده می شود که این کزینه انتخاب شده باشد</p></div>
        <div>
            <InputBasic component={"textarea"} name={"توضیح"}/>
        </div>
        <div>
            <SelectBox options={selectBox}/>
        </div>
        <div className="mt-5">
            <div className="mb-2">زمان پخش</div>
            <div className="d-flex flex-wrap">
                <div className="mr-2 ml-2"><SelectBox options={selectBox1}/></div>
                <div className="mr-2 ml-2"><SelectBox options={selectMin}/></div>
                <div className="mr-2 ml-2"><SelectBox options={selectHours}/></div>
            </div>
        </div>
        <div className="mt-4 mr-3">
                <div className="mb-2">روز های پخش:</div>
                <div>
                {week.map((item)=>(
                    <div className="d-flex m-1"key={item.id}><MyCheckBox options={item.day}/>
                    </div>
                ))}
            </div>
        </div>
        <div className="d-flex mt-4"><MyCheckBox options={"فعال"}/></div>
        <div className="d-flex flex-wrap mt-5">
            <div className="mr-2 ml-2"><Button type="secondary"textbutton={"انصراف"}/></div>
            <div ><Button type="primary"textbutton={"ذخیره"}/></div>
        </div>           
    </div>
  )
}

export default DetailItem