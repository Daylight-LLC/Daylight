import React from 'react'

function MeetingCard() {
  return (
    <div className='border border-gray-300 w-full h-full py-4 rounded-md flex items-center justify-center'>
          <div className="flex flex-col">
              <p className="text-gray-600 text-lg text-center">Scheduled meetings</p>
              <p className="text-xl font-semibold text-center">11:00 - 12:00</p>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2">
                  Open Zoom Link
              </button>
          </div>
    </div>
  )
}

export default MeetingCard