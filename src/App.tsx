import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
