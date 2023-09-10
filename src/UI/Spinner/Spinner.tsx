import {ImSpinner6} from 'react-icons/im'
import Styles from './Spinner.module.css'

const Spinner: React.FC = () => {
  return (
    <div className={Styles.spinner}><ImSpinner6 /></div>
  )
}

export default Spinner