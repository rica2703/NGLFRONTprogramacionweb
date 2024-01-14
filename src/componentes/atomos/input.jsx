export function Input(props){
return(<>
<input type={props.type} placeholder={props.placeholder} className={props.className} onChange={props.onChange} />
</>);
}