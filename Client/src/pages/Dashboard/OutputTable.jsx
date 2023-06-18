import { useSelector } from 'react-redux'

const OutputTable = () => {
  const { processedData } = useSelector((state) => state.main)
  return (
    <div className='output-table flex-justify-center text-dark'>
      <div className='output-table__table-wrapper flex-column gap-4'>
        <p className='text-5 text-bold'>Prediction</p>
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
            {processedData.map((item, index) => {
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
          <button className='btn btn-warning'>Cancel</button>
          <button className='btn btn-primary'>Export</button>
        </div>
      </div>
    </div>
  )
}

export default OutputTable
