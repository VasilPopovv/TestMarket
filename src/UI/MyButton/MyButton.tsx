import Styles from './MyButton.module.css'

interface Ibutton {
    value: string
    fn: () => void
}

const MyButton: React.FC<Ibutton> = ({value, fn}) => {
  return (
    <button className={Styles.button} onClick={() => fn()}>{value}</button>
  )
}

export default MyButton