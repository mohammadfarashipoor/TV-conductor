import SelectBox from './SelectBox';
import InputBasic from './InputBasic';
import ButtonSec from './ButtonSec';
import MyTable from './MyTable';

function TabOne(props) {
    const {data}= props;
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
        label: "Option 2",
        value: "2"
      }];
  return (
    <div>            <div className="ml-5 mr-5 mt-2">
    <div className="bg-gray p-3 rounded">
      <div className="d-flex align-items-center flex-wrap pl-3 pr-3"><div className="m-1">انطباق با</div><div className="m-1"><SelectBox options={selectBox1}/></div><div className="m-1">فیلد های زیر</div></div>
      <div className="d-flex w-100 col-lg-12 flex-lg-nowrap flex-wrap">
        <div className="w-100 col-lg-6 col-sm-12"><InputBasic name="نام" /></div>
        <div className="w-100 col-lg-6 col-sm-12"><div className="mb-1 ">نوع برنامه</div><div><SelectBox 
        options={selectBox2}
        /></div></div> 
        </div>
        <div className="mb-2 mt-2">
        <ButtonSec textbutton="جست و جو"/>
        </div>
    </div>
    <div className="mb-2 mt-2">
    <ButtonSec  textbutton="افزودن برنامه"/>
    </div>
    <div ><MyTable data={data}/></div>
  </div></div>
  )
}

export default TabOne