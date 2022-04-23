import { useState,useEffect } from 'react';
import TabOne from './TabOne';
import axios from "axios";
import ClayLoadingIndicator from '@clayui/loading-indicator';
import ClayTabs from '@clayui/tabs';
import TabTwo from './TabTwo';


const Tabs = () => {
  const [activeTabKeyValue, setActiveTabKeyValue] = useState(0);
  const [data,setData]=useState();
  const [isLoading,setIsLoading] = useState(true);
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
    useEffect(() => {
      fetchData();
    }, []);
    
    const ComponentLoading = () => {
      return <div className="loading"><ClayLoadingIndicator small/></div>;
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
            <TabOne data={data}/>
          </ClayTabs.TabPane>
          <ClayTabs.TabPane aria-labelledby="tab-2">
            <TabTwo data={data}/>
          </ClayTabs.TabPane>
        </ClayTabs.Content>
        </div>
      )}
      </>
    );
  };
  
  export default Tabs;