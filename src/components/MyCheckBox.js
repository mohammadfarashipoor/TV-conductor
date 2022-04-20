import {ClayCheckbox} from '@clayui/form';
import {useState} from 'react' 

const MyCheckBox = (props) => {
    const [value, setValue] = useState(false);
    const handelClick = ()=>{
      setValue(val => !val)
      props.onClick(props.item,value)
    }
    return (
      <ClayCheckbox
        aria-label={props.options}
        checked={value}
        onChange={() => handelClick()}
        label={props.options}     
      />
    );
  };
  
  export default MyCheckBox;