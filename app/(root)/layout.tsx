import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className=''>
      <h1 className="text-4xl"></h1>
      {children}
    </div>
  )
}

export default layout
