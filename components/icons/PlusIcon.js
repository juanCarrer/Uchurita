import * as React from 'react'

function plusIcon (props) {
  const { width = 30, height = 30 } = props

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx={15} cy={15} r={15} fill='#5961FF' />
      <path d='M4 15h22.5M15 26.5V4' stroke='#F6F6F6' strokeWidth={2} />
    </svg>
  )
}

export default plusIcon
