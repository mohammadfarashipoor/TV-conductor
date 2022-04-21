import ClayForm, {ClayInput} from '@clayui/form';



const InputComponent = (props) => {
    return (
      <ClayForm.Group>
        <label htmlFor="basicInputText">{props.name}</label>
        <ClayInput
          id="basicInputText"
          placeholder={props.placeholder}
          type="text"
          component={props.component}
          onClick={props.onClick}
        />
      </ClayForm.Group>
    );
  };
  
export default InputComponent;  