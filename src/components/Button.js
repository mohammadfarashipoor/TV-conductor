import ClayButton from '@clayui/button';
function Button(props) {
  return (
    <ClayButton type={props.submit} displayType={props.type}onClick={props.onClick}>
    {props.textbutton}
</ClayButton>

  )
}

export default Button;