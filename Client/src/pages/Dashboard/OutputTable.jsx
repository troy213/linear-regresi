import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { mainAction } from '../../store/main/main-slice'
import { createExcelFile } from '../../utils'
import { DummyLoading, Pagination } from '../../components'
import { ITEM_PER_PAGE, DEFAULT_PAGE_OFFSET } from '../../utils/constants'

const OutputTable = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [pageOffset, setPageOffset] = useState(DEFAULT_PAGE_OFFSET)
  const { processedData } = useSelector((state) => state.main)

  const dispatch = useDispatch()

  const handleNext = () => {
    setPageOffset((page) => {
      if (page + ITEM_PER_PAGE > processedData.output.length)
        return processedData.output.length - ITEM_PER_PAGE
      return page + ITEM_PER_PAGE
    })
  }

  const handlePrev = () => {
    setPageOffset((page) => {
      if (page - ITEM_PER_PAGE <= 0) return DEFAULT_PAGE_OFFSET
      return page - ITEM_PER_PAGE
    })
  }

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
        <div className='flex-space-between gap-2 mt-4'>
          <Pagination
            pageOffset={pageOffset}
            dataLength={processedData.output.length}
            itemPerPage={ITEM_PER_PAGE}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
          <div className='flex gap-2'>
            <button className='btn btn-warning' onClick={handleCancel}>
              Cancel
            </button>
            <button className='btn btn-primary' onClick={handleExport}>
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutputTable
