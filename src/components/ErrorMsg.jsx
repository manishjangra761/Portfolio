import React from 'react'

const ErrorMsg = () => {
  return (
    <div className="fixed top-4 right-4 bg-rose-900/80 border border-rose-700 text-rose-100 px-4 py-3 rounded-xl shadow-lg z-50">
      <p className="text-sm font-semibold">Not submitted</p>
      <p className="text-sm">Something went wrong. Please try again.</p>
    </div>
  )
}

export default ErrorMsg
