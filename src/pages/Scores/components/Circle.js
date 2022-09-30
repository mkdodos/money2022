import React from 'react'

export default function Circle({num, active, onClick}) {

  let style1 = {
		backgroundColor: '#55d6be',
    outline: 'none',
		height: '50px',
    width:'50px',
    borderRadius:'50%',
    border: '1px solid white'
	};


  let style2 = {
		backgroundColor: '#fc6471',
    outline: 'none',
		height: '50px',
    width:'50px',
    borderRadius:'50%',
    border: '1px solid white'
	};

  // style1.backgroundColor = '#fc6471'

  

  return (
    <button style={active?style1:style2} onClick={onClick}>{num}
      {/* <div style={styleNum}>{num}</div>       */}
    </button>
  )
}
