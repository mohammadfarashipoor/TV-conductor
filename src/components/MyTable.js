import ClayTable from '@clayui/table';
import {useEffect, useState} from 'react';
import Pagination from './Pagination';
import _ from 'lodash';
import ClayLoadingIndicator from '@clayui/loading-indicator';


const MyTable = (props) => {
  const {data}= props;
  const [myactivepage,setMyActivePage]= useState(1);
  const [mydelta,setMyDelta]= useState(20);
  const [countItem,setCountItem]=useState(data);
  const showitems =(activePage,delta)=>{
    setMyActivePage(activePage);
    setMyDelta(delta)
  }
  useEffect(() => {
    const startIndex = (myactivepage - 1)* mydelta;
    setCountItem(_(data).slice(startIndex).take(mydelta).value());

  }, [data]);
  const ComponentLoading = () => {
    return <tr><td colSpan="4"><div className="loading"><ClayLoadingIndicator small/></div></td></tr>;
  };
    return (
        <>
        <Pagination countitems={data.length} showitems={showitems}/>
      <ClayTable className="mytable">
        <ClayTable.Head>
          <ClayTable.Row>
            <ClayTable.Cell expanded headingCell>
              {"نام برنامه"}
            </ClayTable.Cell>
            <ClayTable.Cell headingCell>{"روز"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"زمان پخش"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"لینک"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"نوع برنامه"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"وضعیت"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"پخش"}</ClayTable.Cell>
          </ClayTable.Row>
        </ClayTable.Head>
        <ClayTable.Body>
          {countItem===undefined ? (<ComponentLoading />) :Object.values(countItem).map((item) => (
                      <ClayTable.Row key={item.id}>
                      <ClayTable.Cell headingTitle>{item.name}</ClayTable.Cell>
                      <ClayTable.Cell>{item.day.toString()}</ClayTable.Cell>
                      <ClayTable.Cell>{item.time.toString()}</ClayTable.Cell>
                      <ClayTable.Cell>{"Brazil"}</ClayTable.Cell>
                      <ClayTable.Cell>{item.type===1?"سیما":"صدا"}</ClayTable.Cell>
                      <ClayTable.Cell>{item.status?"فعال":"غیرفعال"}</ClayTable.Cell>
                      <ClayTable.Cell>{"Brazil"}</ClayTable.Cell>
                    </ClayTable.Row>
          ))}
        </ClayTable.Body>
      </ClayTable>
    </>
    );
  };
  
export default MyTable;