import spinImg from '../img/spin.gif'

export default function Spinner() {
  return (
<div className="ui basic segment">
<img src={spinImg} className="ui centered medium image" style={{width:'100px'}} />
</div>

    
  )
}