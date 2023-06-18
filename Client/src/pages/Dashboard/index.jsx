import { Footer, Navbar } from '../../components'
import Main from './Main'
import InputTable from './InputTable'
import OutputTable from './OutputTable'

const Dashboard = () => {
  return (
    <div className='dashboard flex-column gap-8'>
      <Navbar />
      <Main />
      <InputTable />
      <OutputTable />
      <Footer />
    </div>
  )
}

export default Dashboard
