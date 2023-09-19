import {Link} from 'react-router-dom'
import Styles from './AppLinks.module.css'
import app1 from "../../assets/image/svg/app1.svg";
import app2 from "../../assets/image/svg/app2.svg";


const AppLinks = () => {
  return (
    <div className={Styles.appLink}>
                <p>Install app</p>
                <div>
                    <Link
                        to={"https://www.apple.com/app-store/"}
                        target="_blank"
                    >
                        <img src={app1} alt="" />
                    </Link>
                    <Link
                        to={"https://play.google.com/store/games"}
                        target="_blank"
                    >
                        <img src={app2} alt="" />
                    </Link>
                </div>
            </div>
  )
}

export default AppLinks