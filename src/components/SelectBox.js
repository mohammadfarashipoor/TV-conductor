import {ClaySelect} from '@clayui/form';

const SelectBox = (props) => {
    const options = props.options;
    return (
      <ClaySelect defaultValue={props.val} aria-label="Select Label" id="mySelectId"onChange={props.onClick}
      >
        {options.map(item => (
          <ClaySelect.Option
            key={item.value}
            label={item.label}
            value={item.value}
          />
        ))}
      </ClaySelect>
    );
  };
  
  export default SelectBox;