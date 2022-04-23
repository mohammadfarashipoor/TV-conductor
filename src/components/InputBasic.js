import ClayForm, {ClayInput} from '@clayui/form';



const InputBasic = (props) => {
    return (
      <ClayForm.Group  className="mb-1">
        <label htmlFor="basicInputText">{props.name}</label>
        <ClayInput
          id="basicInputText"
          placeholder={props.placeholder}
          type="text"
          onClick={props.onClick}
          onChange={props.onChange}
          value={props.value}
          onInput={props.onInput}
        />
      </ClayForm.Group>
    );
  };
  
export default InputBasic;  