import ClayTable from '@clayui/table';

///this table no header
    const Table = () => {
      
        return (
          <ClayTable>
            <ClayTable.Body>
              <ClayTable.Row>
                <ClayTable.Cell headingTitle>{"White and Red"}</ClayTable.Cell>
                <ClayTable.Cell>{"Brazil"}</ClayTable.Cell>
              </ClayTable.Row>
              <ClayTable.Row>
                <ClayTable.Cell headingTitle>{"White and Purple"}</ClayTable.Cell>
                <ClayTable.Cell>{"Spain"}</ClayTable.Cell>
              </ClayTable.Row>
            </ClayTable.Body>
          </ClayTable>
        );
      };
      
      
  

export default Table