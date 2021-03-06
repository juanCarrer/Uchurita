import * as React from 'react'

function Cart (props) {
  const { width = 32, height = 29 } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M30.935 3.57H8.825a287.48 287.48 0 00-.447-2.281C8.18.297 7.271.017 6.841 0H1.438C.208.08 0 .744 0 1.041v1.537c.05.545.744.909 1.09.991h4.016l3.966 19.186c-3.123 2.48-.793 5.8 1.537 5.8 2.777 0 4.165-2.974 2.28-5.354h11.602c-1.904 2.142-.496 5.503 2.577 5.355 4.006-1.032 2.975-5.206.992-5.9l.248-1.289c.198-1.19-.744-1.685-1.24-1.785H12.096l-.347-1.735h16.162c.952-.04 1.388-.644 1.487-.942l2.43-11.055c.555-1.467-.364-2.132-.893-2.28z'
        fill='#212526'
      />
    </svg>
  )
}

export default Cart
