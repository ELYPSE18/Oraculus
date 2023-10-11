import { createContext, useContext, useState } from 'react';

// Créez un contexte de données
const DataContext = createContext();

// Créez un composant fournisseur pour envelopper votre application
export function DataProvider ({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0)

 
  // Fournissez les valeurs du contexte aux composants enfants
  return (
    <DataContext.Provider value={{ currentIndex, setCurrentIndex }}>
      {children}
    </DataContext.Provider>
  )
}


export function useDataContext() {
  return useContext(DataContext)
}
