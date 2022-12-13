import React from 'react';
import './App.css';
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from 'i18next';

i18n
  .use(initReactI18next)
  .init({
    returnNull: false,
  });

function App() {
  const {t} = useTranslation()

  return (
    <input type="text" placeholder={t('Placeholder for @adrai')}
    />
  );
}

export default App;
