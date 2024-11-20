import React from 'react'

const ErrorMsg = () => {
  return (
    <div className="fixed top-4 right-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-lg z-50">
    <p className="text-lg font-semibold">Not Submitted 😔</p>
    <p>There was an error submitting your form. Please try again.</p>
  </div>
  )
}

export default ErrorMsg
