import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header/index'
import { Dashboard } from './components/Dashboard/index';
import { NewTransactionModal } from './components/NewTransactionModal/index';
import { TransactionsProvider } from './hooks/useTransactions'

import { GlobalStyle } from './styles/global';

export function App() {

  Modal.setAppElement('#root');

  const [isNewTransactionModalopen, setIsNewTransactionModalopen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalopen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalopen(false);
  }

  
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalopen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}