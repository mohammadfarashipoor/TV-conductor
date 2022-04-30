import {useState} from 'react'
import {ClayRadio, ClayRadioGroup} from '@clayui/form';

const InputRadio = (props) => {
	const [value, setValue] = useState(props.default ===1?'سیما':'صدا');
	function handelClick(value){
		setValue(value)
		props.onChange(value)
	}
	return (
		<ClayRadioGroup
			inline
			onSelectedValueChange={value => handelClick(value)}
			selectedValue={value} className="mr-2 Radiogroup"
            >
			<ClayRadio label="سیما" value="سیما" />
			<ClayRadio label="صدا" value="صدا" />
		</ClayRadioGroup>
	);
}
export default InputRadio;

