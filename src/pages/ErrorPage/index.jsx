import { useRouteError } from 'react-router-dom'

export default function ErrorPage () {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='flex justify-center items-center flex-col w-screen h-screen'>
      <h1 className='text-[2rem] font-bold mb-2'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='mt-2'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
