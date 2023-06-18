import * as XLSX from 'xlsx'

const regresiLinear = (data, jumlahProduksi) => {
  const SQUARE = 2

  if (!data.length) return

  const table = data.map((value) => {
    const { tanggal, pemakaian, stok } = value

    const newData = {
      tanggal: new Date(tanggal),
      x: pemakaian,
      y: stok,
      x2: Math.pow(pemakaian, SQUARE),
      y2: Math.pow(pemakaian, SQUARE),
      xy: pemakaian * stok,
    }

    return newData
  })

  const n = data.length
  let sigmaX = 0
  let sigmaY = 0
  let sigmaXY = 0
  let sigmaX2 = 0

  table.forEach((value) => {
    sigmaX += value.x
    sigmaY += value.y
    sigmaXY += value.xy
    sigmaX2 += value.x2
  })

  const b = (n * sigmaXY - sigmaX * sigmaY) / (n * sigmaX2 - sigmaX * sigmaX)
  const a = (sigmaY - b * sigmaX) / n
  const result = Math.ceil(a + b * jumlahProduksi)

  if (isNaN(result)) return 0

  return result
}

export const prosesRegresiArray = (data) => {
  if (!data.length) return []

  const output = []

  data.forEach((value) => {
    const mean = Number(
      (
        value.subdata.reduce((acc, curr) => acc + curr.stok, 0) /
        value.subdata.length
      ).toFixed(0)
    )
    const prediksi = regresiLinear(value.subdata, mean)

    const newData = {
      item: value.item,
      prediksi,
      satuan: value.satuan,
    }

    output.push(newData)
  })

  return output
}

export const processData = (data) => {
  const output = []

  data.forEach((item) => {
    const index = output.findIndex((value) => value.item === item.item)
    const isExist = index >= 0

    if (isExist) {
      const { tanggal, stok, pemakaian } = item
      const newData = {
        tanggal,
        stok,
        pemakaian,
      }
      output[index].subdata.push(newData)
    } else {
      const { satuan, tanggal, stok, pemakaian } = item
      const newData = {
        item: item.item,
        satuan,
        subdata: [
          {
            tanggal,
            stok,
            pemakaian,
          },
        ],
      }
      output.push(newData)
    }
  })

  return output
}

function convertExcelDate(excelDate) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000 // Number of milliseconds in a day
  const dateOffset = new Date(1899, 11, 30) // Excel's date offset (December 30, 1899)

  const milliseconds = Math.round((excelDate - 1) * millisecondsPerDay)
  const date = new Date(dateOffset.getTime() + milliseconds)

  const addPadZero = (value) => {
    if (value < 10) return `0${value}`
    return value
  }

  // Format the date string as per your requirements
  const formattedDate = `${addPadZero(date.getDate())}-${addPadZero(
    date.getMonth() + 1
  )}-${date.getFullYear()}`

  return formattedDate
}

export const readXlsx = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const header = ['tanggal', 'item', 'stok', 'pemakaian', 'satuan']
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        const sheetName = workbook.SheetNames[0]
        const sheet = workbook.Sheets[sheetName]
        const rawData = XLSX.utils.sheet_to_json(sheet, { header })
        const output = rawData.slice(1, rawData.length)

        const DATE_OFFSET = 2 // to fix excel date offset by 2 days
        const parsedData = output.map((row) => {
          return {
            ...row,
            tanggal: convertExcelDate(row.tanggal + DATE_OFFSET),
          }
        })

        resolve(parsedData)
      } catch (error) {
        reject(error)
      }
    }
    reader.readAsArrayBuffer(file)
  })
}
