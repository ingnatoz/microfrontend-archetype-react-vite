import { useContext } from 'react';
import { GlobalContext, type GlobalContextValue } from '../context/GlobalContext';

export function useGlobalContext(): GlobalContextValue {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobalContext must be used within <GlobalProvider>.');
  }

  return context;
}
