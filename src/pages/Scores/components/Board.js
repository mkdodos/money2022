import '../components/Board.css'

export default function Board({score}) {
  return (
    <div className='score'><span className="text">{score}</span> /120</div>
  )
}
