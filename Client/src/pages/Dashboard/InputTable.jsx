const InputTable = () => {
  return (
    <div className='input-table flex-justify-center text-dark'>
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
            <tr>
              <td>01/01/2023</td>
              <td>Gula</td>
              <td>200</td>
              <td>100</td>
              <td>gram</td>
            </tr>
            <tr>
              <td>01/01/2023</td>
              <td>Gula</td>
              <td>200</td>
              <td>100</td>
              <td>gram</td>
            </tr>
          </tbody>
        </table>
        <div className='flex-end gap-2 mt-4'>
          <button className='btn btn-warning'>Cancel</button>
          <button className='btn btn-primary'>Proses</button>
        </div>
      </div>
    </div>
  )
}

export default InputTable
