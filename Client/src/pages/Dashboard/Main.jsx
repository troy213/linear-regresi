import { useState } from 'react'
import { useSelector } from 'react-redux'
import { HeroSvg } from '../../assets'

const Main = () => {
  const [file, setFile] = useState(null)
  const { data } = useSelector((state) => state.main)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <main className='dashboard__content flex-column flex-justify-center'>
      <div className='flex flex-justify-center gap-8'>
        <div className='dashboard__content-left flex-column flex-justify-center gap-8'>
          <p className='text-8 text-caveat-brush'>
            Stock prediction using Linear Regression algorithm
          </p>
          {data ? (
            <p>
              Easy way to predict the stock of item in single step. Say goodbye
              to complex and time-consuming processes - our intuitive interface
              simplifies the prediction process.
            </p>
          ) : (
            <form>
              <label htmlFor='file-upload' className='flex-column gap-4'>
                <p>Upload your report here</p>
                <div className='flex gap-2'>
                  <div className='dashboard__file-input-label flex-align-center'>
                    <em className='text-3 text-dark'>
                      {file ? file.name : 'Upload .xlsx'}
                    </em>
                  </div>
                  <button className='dashboard__file-input-submit'>
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
