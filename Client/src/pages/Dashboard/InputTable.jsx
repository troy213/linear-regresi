import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mainAction } from '../../store/main/main-slice'
import { processData, prosesRegresiArray } from '../../utils'
import { DummyLoading, Pagination } from '../../components'
import { DEFAULT_PAGE_OFFSET, ITEM_PER_PAGE } from '../../utils/constants'

const InputTable = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [processedData, setProcessedData] = useState(null)
  const [pageOffset, setPageOffset] = useState(DEFAULT_PAGE_OFFSET)
  const { data } = useSelector((state) => state.main)
  const dispatch = useDispatch()

  const handleNext = () => {
    setPageOffset((page) => {
      if (page + ITEM_PER_PAGE > data.length) return data.length - ITEM_PER_PAGE
      return page + ITEM_PER_PAGE
    })
  }

  const handlePrev = () => {
    setPageOffset((page) => {
      if (page - ITEM_PER_PAGE <= 0) return DEFAULT_PAGE_OFFSET
      return page - ITEM_PER_PAGE
    })
  }

  const handleSubmit = () => {
    const newData = prosesRegresiArray(processData(data))
    setIsLoading(true)
    setProcessedData(newData)
  }

  const handleDispatch = () => {
    dispatch(
      mainAction.setState({ field: 'processedData', value: processedData })
    )
    dispatch(mainAction.setState({ field: 'data', value: [] }))
  }

  const handleCancel = () => {
    dispatch(mainAction.setState({ field: 'data', value: [] }))
  }

  return (
    <div className='input-table flex-justify-center text-dark'>
      <DummyLoading
        isLoading={isLoading}
        maxCount={processedData?.output.length}
        onClose={() => setIsLoading(false)}
        dispatch={handleDispatch}
      />
      <div className='input-table__table-wrapper flex-column gap-4'>
        <p className='text-5 text-bold'>Data List</p>
        <table>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Bahan</th>
              <th>Stok</th>
              <th>Pemakaian</th>
              <th>Satuan</th>
            </tr>
          </thead>
          <tbody>
            {data
              .slice(pageOffset, pageOffset + ITEM_PER_PAGE)
              .map((value, index) => {
                const { item, tanggal, stok, pemakaian, satuan } = value

                return (
                  <tr key={index}>
                    <td>{tanggal}</td>
                    <td>{item}</td>
                    <td>{stok}</td>
                    <td>{pemakaian}</td>
                    <td>{satuan}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
        <div className='flex-space-between gap-2 mt-4'>
          <Pagination
            pageOffset={pageOffset}
            dataLength={data.length}
            itemPerPage={ITEM_PER_PAGE}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
          <div className='flex gap-2'>
            <button className='btn btn-warning' onClick={handleCancel}>
              Cancel
            </button>
            <button className='btn btn-primary' onClick={handleSubmit}>
              Process
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputTable
