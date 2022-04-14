import {useState} from 'react'
import {ClayRadio, ClayRadioGroup} from '@clayui/form';

const InputRadio = () => {
	const [value, setValue] = useState('سیما');

	return (
		<ClayRadioGroup
			inline
			onSelectedValueChange={val => setValue(val)}
			selectedValue={value} className="mr-2 Radiogroup"
            >
			<ClayRadio label="سیما" value="سیما" />
			<ClayRadio label="صدا" value="صدا" />
		</ClayRadioGroup>
	);
}
export default InputRadio;

