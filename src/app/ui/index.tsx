import { withProviders } from "../providers";
import styles from "./styles.module.scss"

export const App = () => {
  return (
    <div className={styles.app}>
    </div>
  );
}

export default withProviders(App)
