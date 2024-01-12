import { useState } from 'react';
import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { Header, WednesdayHeader } from './components/Header/Header';

function App() {
  const [day] = useState(new Date().getDay());
  
  return (
    <div className={styles.app}>
      {day === 3 && <WednesdayHeader />}
      {day !== 3 && <Header />}
      <Footer />
    </div>
  );
}

export default App;
