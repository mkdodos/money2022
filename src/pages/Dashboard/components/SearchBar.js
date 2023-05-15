import React from 'react'

// 類別下拉
import CateDropdown from '../../../components/CateDropdown'

export default function SearchBar({cateQuery}) {
 

  return (
    <div>
      <CateDropdown onChange={cateQuery} />
    </div>
  )
}
