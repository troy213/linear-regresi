import { useSelector } from 'react-redux'
import { Footer, Navbar } from '../../components'
import Main from './Main'
import InputTable from './InputTable'
import OutputTable from './OutputTable'

const Dashboard = () => {
  const { data, processedData } = useSelector((state) => state.main)

  return (
    <div className='dashboard flex-column gap-8'>
      <Navbar />
      <Main />
      {data.length ? <InputTable /> : null}
      {processedData?.output.length ? <OutputTable /> : null}
      <Footer />
    </div>
  )
}

export default Dashboard
