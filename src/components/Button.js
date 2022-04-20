import ClayButton from '@clayui/button';
function Button(props) {
  return (
    <ClayButton displayType={props.type}onClick={props.onClick}>
    {props.textbutton}
</ClayButton>

  )
}

export default Button;