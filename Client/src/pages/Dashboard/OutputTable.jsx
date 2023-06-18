const OutputTable = () => {
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
            <tr>
              <td>1</td>
              <td>Gula</td>
              <td>100</td>
              <td>gram</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Garam</td>
              <td>200</td>
              <td>gram</td>
            </tr>
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
