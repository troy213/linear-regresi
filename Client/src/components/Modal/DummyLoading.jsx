import { useState, useEffect } from 'react'
import { LoadingSvg } from '../../assets'
import { DUMMY_LOADING_TIMEOUT } from '../../utils/constants'
import Modal from '.'

const DummyLoading = ({ isLoading, onClose, maxCount, dispatch }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isLoading) {
      const countInterval = setInterval(() => {
        setCount((prevState) => prevState + 1)
        if (count >= maxCount) {
          setCount(0)
          onClose()
          dispatch()
        }
      }, DUMMY_LOADING_TIMEOUT)

      return () => {
        clearInterval(countInterval)
      }
    }
  }, [count, maxCount, onClose, dispatch, isLoading])

  if (!isLoading) return <></>

  return (
    <Modal open={true}>
      <div className='flex-column flex-align-center gap-4'>
        <div className='dummy-loading__hero'>
          <LoadingSvg />
        </div>
        <div>
          <p>
            Processing <span className='text-bold'>{count}</span> of{' '}
            <span className='text-bold'>{maxCount}</span> data
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default DummyLoading
