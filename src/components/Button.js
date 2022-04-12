import ClayButton from '@clayui/button';
function Button(props) {
  return (
    <ClayButton displayType={props.type}>
    {props.textbutton}
</ClayButton>

  )
}

export default Button;