import { useSelector } from 'react-redux'
import { Footer, Navbar } from '../../components'
import Main from './Main'
import InputTable from './InputTable'
import OutputTable from './OutputTable'

const Dashboard = () => {
  const { processedData } = useSelector((state) => state.main)

  return (
    <div className='dashboard flex-column gap-8'>
      <Navbar />
      <Main />
      <InputTable />
      {processedData.length && <OutputTable />}
      <Footer />
    </div>
  )
}

export default Dashboard
