import { useState,useEffect } from 'react';
import SelectBox from './SelectBox';
import InputBasic from './InputBasic';
import ButtonSec from './ButtonSec';
import MyTable from './MyTable';
import axios from "axios";
import ClayLoadingIndicator from '@clayui/loading-indicator';
import ClayTabs from '@clayui/tabs';



const Tabs = () => {
  const [activeTabKeyValue, setActiveTabKeyValue] = useState(0);
  const [data,setData]=useState();
  const [isLoading,setIsLoading] = useState(true);
  async function fetchData() {
    try {
      const result = await axios.get(
        "https://6242dd49b6734894c157e955.mockapi.io/date/d1/Times"
        );
        setData(result.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
      fetchData();
    }, []);
    const ComponentLoading = () => {
      return <ClayLoadingIndicator small className="align-middle"/>;
    };
    return (
      <>{isLoading ? ComponentLoading(): (
      <div className="m-4">
        <ClayTabs modern>
          <ClayTabs.Item
            active={activeTabKeyValue === 0}
            innerProps={{
              "aria-controls": "tabpanel-1"
            }}
            onClick={() => setActiveTabKeyValue(0)}
          >
            {"مدیریت برنامه"}
          </ClayTabs.Item>
          <ClayTabs.Item
            active={activeTabKeyValue === 1}
            innerProps={{
              "aria-controls": "tabpanel-2"
            }}
            onClick={() => setActiveTabKeyValue(1)}
          >
            {"جدول پخش هفتگی"}
          </ClayTabs.Item>
        </ClayTabs>
        <ClayTabs.Content activeIndex={activeTabKeyValue} fade>
          <ClayTabs.TabPane aria-labelledby="tab-1">
            <div className="ml-5 mr-5 mt-2">
              <div className="bg-gray p-3 rounded">
                <div className="d-flex align-items-center flex-wrap pl-3 pr-3"><div className="m-1">انطباق با</div><div className="m-1"><SelectBox options={[{
        label: "تمام",
        value: "1"
      },
      {
        label: "Option 2",
        value: "2"
      }]}/></div><div className="m-1">فیلد های زیر</div></div>
                <div className="d-flex w-100 col-lg-12 flex-lg-nowrap flex-wrap">
                  <div className="w-100 col-lg-6 col-sm-12"><InputBasic name="نام" /></div>
                  <div className="w-100 col-lg-6 col-sm-12"><div className="mb-1 ">نوع برنامه</div><div><SelectBox 
                  options={[{
                    label: "تمام",
                    value: "1"
                  },
                  {
                    label: "Option 2",
                    value: "2"
                  }]}
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
            </div>
          </ClayTabs.TabPane>
          <ClayTabs.TabPane aria-labelledby="tab-2">
            {`2. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.`}
          </ClayTabs.TabPane>
        </ClayTabs.Content>
        </div>
      )}
      </>
    );
  };
  
  export default Tabs;