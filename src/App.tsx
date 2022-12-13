import React from 'react';
import './App.css';
import {useTranslation} from "react-i18next";

function App() {
  const {t} = useTranslation()

  return (
    <input type="text" placeholder={t('Placeholder for @adrai')}
    />
  );
}

export default App;
