export const EditCate = (props) => {
  return (   
    <input value={props.name} onChange={(e)=>{props.onChange(e.target.value)}}></input>
  )
}