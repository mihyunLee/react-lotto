import React from 'react'
import LottoNumberItem from './../LottoNumberItem/LottoNumberItem';

export default function LottoNumberList() {
  const lotto_list = Array.from(new Array(45), (x, i) => <LottoNumberItem LottoNumber={i + 1}/>)
  return (
    <div className='l_lotto_list'>
      {lotto_list}
    </div>
  )
}
