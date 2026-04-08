import React from 'react'

const SuccessMsg = () => {
  return (
    <div className="fixed top-4 right-4 bg-emerald-900/80 border border-emerald-700 text-emerald-100 px-4 py-3 rounded-xl shadow-lg z-50">
      <p className="text-sm font-semibold">Submitted</p>
      <p className="text-sm">Your message is on the way.</p>
    </div>
  )
}

export default SuccessMsg
