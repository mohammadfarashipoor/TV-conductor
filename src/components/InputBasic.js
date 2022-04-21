import ClayForm, {ClayInput} from '@clayui/form';



const InputBasic = (props) => {
    return (
      <ClayForm.Group>
        <label htmlFor="basicInputText">{props.name}</label>
        <ClayInput
          id="basicInputText"
          placeholder={props.placeholder}
          type="text"
          onClick={props.onClick}
          onChange={props.onChange}
        />
      </ClayForm.Group>
    );
  };
  
export default InputBasic;  