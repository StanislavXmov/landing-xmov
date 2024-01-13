import { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header, WednesdayHeader } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';

import '@radix-ui/themes/styles.css';
import styles from './App.module.scss';

function App() {
  const [day] = useState(new Date().getDay());
  
  return (
    <div className={styles.app}>
      <Navigation />
      {day === 3 && <WednesdayHeader />}
      {day !== 3 && <Header />}
      <Footer />
    </div>
  );
}

export default App;
