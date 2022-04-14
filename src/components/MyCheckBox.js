import {ClayCheckbox} from '@clayui/form';
import {useState} from 'react' 

const MyCheckBox = (props) => {
    const [value, setValue] = useState(false);
  
    return (
      <ClayCheckbox
        aria-label={props.options}
        checked={value}
        onChange={() => setValue(val => !val)}
        label={props.options}
      />
    );
  };
  
  export default MyCheckBox;