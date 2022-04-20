import {ClaySelect} from '@clayui/form';

const SelectBox = (props) => {
    const options = props.options;
    return (
      <ClaySelect aria-label="Select Label" id="mySelectId">
        {options.map(item => (
          <ClaySelect.Option
            key={item.value}
            label={item.label}
            value={item.value}
            onClick={props.onClick}
          />
        ))}
      </ClaySelect>
    );
  };
  
  export default SelectBox;