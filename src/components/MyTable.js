import ClayTable from '@clayui/table';
import {useState} from 'react';
import Pagination from './Pagination';
import _ from 'lodash';
import ClayLoadingIndicator from '@clayui/loading-indicator';


const MyTable = (props) => {
  const {data}= props;
  const [items, setItems] = useState();
  const ComponentLoading = () => {
    return <div className="loading"><ClayLoadingIndicator small/></div>;
  };
  let countItem;
  const showitems =(activePage,delta)=>{
      const startIndex = (activePage - 1)* delta;
      countItem = _(data).slice(startIndex).take(delta).value();
      setItems(countItem);
    }
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
          {items===undefined ? (<ComponentLoading />) :Object.values(items).map((item) => (
                      <ClayTable.Row key={item.id}>
                      <ClayTable.Cell headingTitle>{"White and Red"}</ClayTable.Cell>
                      <ClayTable.Cell>{"South America"}</ClayTable.Cell>
                      <ClayTable.Cell>{"Brazil"}</ClayTable.Cell>
                      <ClayTable.Cell>{"Brazil"}</ClayTable.Cell>
                      <ClayTable.Cell>{"Brazil"}</ClayTable.Cell>
                      <ClayTable.Cell>{"Brazil"}</ClayTable.Cell>
                      <ClayTable.Cell>{"Brazil"}</ClayTable.Cell>
                    </ClayTable.Row>
          ))}
        </ClayTable.Body>
      </ClayTable>
    </>
    );
  };
  
export default MyTable;