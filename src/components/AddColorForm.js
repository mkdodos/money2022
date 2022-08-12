import {Component} from 'react'
export default class AddColorForm extends Component {
  
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)

  }
  submit(e) {
    
    const {title,amt} = this.refs
    e.preventDefault()
    // 將資料傳入 onNewColor
    // 父元件即可取得
    // title.value = 'my test'
    // this.props.onEdit((abc)=>{
    //   this.value = abc
    // })
    // title.value = this.props.title
    // let temp = ""

    // if(this.props.title){
    //   temp = this.props.title
    // }else{
    //   temp = title.value
    // }
    this.props.onNewColor(title.value,amt.value)
    // console.log(title.value)
  }
  
  render() {
    return (
      <form onSubmit={this.submit}>
        <input type='text'  defaultValue={this.props.title1} /> 
        <input type='number' ref='amt'/>       
        <button>ADD</button>
      </form>
    )
  }
}