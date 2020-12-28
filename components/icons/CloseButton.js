import * as React from 'react'

function CloseButton (props) {
  const { width = 22, height = 22 } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#prefix__clip0)'>
        <rect width={22} height={22} rx={5} fill='#5961FF' />
        <path
          d='M3.08 2.828L19.09 18.635M2.828 18.74L18.635 2.728'
          stroke='#F6F6F6'
          strokeWidth={2}
        />
      </g>
      <defs>
        <clipPath id='prefix__clip0'>
          <rect width={22} height={22} rx={5} fill='#fff' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CloseButton
