import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { mainAction } from '../../store/main/main-slice'
import { readXlsx } from '../../utils'
import { HeroSvg } from '../../assets'
import { DummyLoading } from '../../components'

const Main = () => {
  const [file, setFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [xlsxData, setXlsxData] = useState([])
  const { data } = useSelector((state) => state.main)

  const dispatch = useDispatch()

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleReadXlsx = async (e, file) => {
    e.preventDefault()
    if (!file) return alert('Please select a file')

    try {
      const output = await readXlsx(file)
      setIsLoading(true)
      setXlsxData(output)
    } catch (err) {
      console.error(err)
    }
  }

  const handleDispatch = () => {
    dispatch(mainAction.setState({ field: 'processedData', value: [] }))
    dispatch(mainAction.setState({ field: 'data', value: xlsxData }))
  }

  return (
    <main className='dashboard__content flex-column flex-justify-center'>
      <DummyLoading
        isLoading={isLoading}
        maxCount={xlsxData.length}
        onClose={() => setIsLoading(false)}
        dispatch={handleDispatch}
      />

      <div className='flex flex-justify-center gap-8'>
        <div className='dashboard__content-left flex-column flex-justify-center gap-8'>
          <p className='text-8 text-caveat-brush'>
            Stock prediction using Linear Regression algorithm
          </p>
          {data.length ? (
            <p>
              Easy way to predict the stock of item in single step. Say goodbye
              to complex and time-consuming processes - our intuitive interface
              simplifies the prediction process.
            </p>
          ) : (
            <form onSubmit={(e) => handleReadXlsx(e, file)}>
              <label htmlFor='file-upload' className='flex-column gap-4'>
                <p>Upload your report here</p>
                <div className='flex gap-2'>
                  <div className='dashboard__file-input-label flex-align-center'>
                    <em className='text-3 text-dark'>
                      {file ? file.name : 'Upload .xlsx'}
                    </em>
                  </div>
                  <button
                    className='dashboard__file-input-submit'
                    type='submit'
                  >
                    Upload
                  </button>
                </div>
              </label>

              <input
                type='file'
                id='file-upload'
                className='dashboard__file-input'
                accept='.xlsx'
                onChange={handleFileChange}
              />
            </form>
          )}
        </div>
        <HeroSvg className='dashboard__hero' />
      </div>
    </main>
  )
}

export default Main
