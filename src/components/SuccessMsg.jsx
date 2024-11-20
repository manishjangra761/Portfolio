import React from 'react'

const SuccessMsg = () => {
  return (
    <div className="fixed top-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg shadow-lg z-50">
    <p className="text-lg font-semibold">Submitted 😊</p>
    <p>Your form has been submitted successfully.</p>
  </div>
  )
}

export default SuccessMsg
