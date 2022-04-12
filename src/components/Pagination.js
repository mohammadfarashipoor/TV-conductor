import {ClayPaginationBarWithBasicItems} from '@clayui/pagination-bar';
import {useState,useEffect} from 'react';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
const Pagination = (props) => {
    const [activePage, setActivePage] = useState(1);
    const [delta, setDelta] = useState(20);
    
    const deltas = [
      {
        label: 20
      },
      {
        label: 40
      },
      {
        label: 60
      },
      {
        label: 80
      }
    ];
  const handlechange=()=>{
   props.showitems(activePage,delta)
  }
  useEffect(() => {
    handlechange()
  }, [activePage]);
    return (
      <>
      <ClayPaginationBarWithBasicItems
      activeDelta={delta}
      activePage={activePage}
      deltas={deltas}
      ellipsisBuffer={3}
      onDeltaChange={setDelta}
      onPageChange={setActivePage}
      spritemap={spritemap}
      totalItems={props.countitems}
      className="pagination"
      />
      </>
    );
  };
export default Pagination  