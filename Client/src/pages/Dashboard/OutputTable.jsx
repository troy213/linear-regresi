import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { mainAction } from '../../store/main/main-slice'
import { createExcelFile } from '../../utils'
import { DummyLoading } from '../../components'

const OutputTable = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { processedData } = useSelector((state) => state.main)

  const dispatch = useDispatch()

  const handleCancel = () => {
    dispatch(mainAction.setState({ field: 'processedData', value: null }))
  }

  const handleExport = () => {
    setIsLoading(true)
  }

  return (
    <div className='output-table flex-justify-center text-dark'>
      <DummyLoading
        isLoading={isLoading}
        maxCount={processedData.output.length}
        dispatch={() => createExcelFile(processedData)}
        onClose={() => setIsLoading(false)}
      />
      <div className='output-table__table-wrapper flex-column gap-4'>
        <p className='text-5 text-bold'>
          Prediksi {processedData?.predictionDate}
        </p>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Bahan</th>
              <th>Prediksi Pemakaian</th>
              <th>Satuan</th>
            </tr>
          </thead>
          <tbody>
            {processedData.output.map((item, index) => {
              const { prediksi, satuan } = item

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.item}</td>
                  <td>{prediksi}</td>
                  <td>{satuan}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className='flex-end gap-2 mt-4'>
          <button className='btn btn-warning' onClick={handleCancel}>
            Cancel
          </button>
          <button className='btn btn-primary' onClick={handleExport}>
            Export
          </button>
        </div>
      </div>
    </div>
  )
}

export default OutputTable
