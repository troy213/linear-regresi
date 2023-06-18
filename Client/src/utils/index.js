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
