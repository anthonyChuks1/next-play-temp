'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className = "flex flex-col items-center justify-center min-h-screen text-3xl">
      <h2 className = "text-red-600 animate-pulse">{!error.message ? "Something went wrong" : error.message}</h2>
      <button className="bg-blue-500 mt-5 p-1 rounded-b-sm hover:bg-red-700"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}