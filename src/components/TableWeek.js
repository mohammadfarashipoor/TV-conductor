import ClayTable from '@clayui/table';

    const TableWeek = (props) => {
      const {item}=props
        return (
          <ClayTable>
            <ClayTable.Body>
              <ClayTable.Row>
                <ClayTable.Cell  headingTitle>{item.name}</ClayTable.Cell>
                <ClayTable.Cell >{item.time.noon} {item.time.hour} : {item.time.min}</ClayTable.Cell>
              </ClayTable.Row>
            </ClayTable.Body>
          </ClayTable>
        );
      };
      
      
  

export default TableWeek