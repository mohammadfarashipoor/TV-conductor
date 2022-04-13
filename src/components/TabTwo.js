import SelectBox from './SelectBox';
import WeekBtn from './WeekBtn'
import Table from './Table';

function TabTwo() {
    const selectBox=[{
        label: "سینما",
        value: "1"
        },
        {
        label: "Option 2",
        value: "2"
        }];
   
  return (
    <div className="ml-5 mr-5 mt-2">
        <div className="d-flex align-items-center flex-wrap pl-3 pr-3">
          <div className="m-3">نوع کنداکتور</div>
          <div><SelectBox className="m-3" options={selectBox} /></div>
        </div>
        <div>
            <WeekBtn/>
            </div>
        <div>
            <Table/>
        </div>
    </div>
  )
}

export default TabTwo