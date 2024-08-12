import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([
    { date: '2019-12-01', description: "Paycheck from Bob's Burgers", category: 'Income', amount: 1000 },
    { date: '2019-12-01', description: "South by Southwest Quinoa Bowl at Fresh & Co", category: 'Food', amount: -10.55 },
    { date: '2019-12-02', description: "South by Southwest Quinoa Bowl at Fresh & Co", category: 'Food', amount: -10.55 },
    { date: '2019-12-04', description: "Sunglasses, Urban Outfitters", category: 'Fashion', amount: -24.99 },
    { date: '2019-12-06', description: "Venmo, Alice Pays you for Burrito", category: 'Food', amount: 8.75 },
    { date: '2019-12-06', description: "Chipotle", category: 'Food', amount: -17.59 },
    { date: '2020-01-08', description: "Movies", category: 'Entertainment', amount: 25 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <div>
      <Search onSesrch={handleSearch}/>
      <AddTransactionForm onAddTransaction={handleAddTransaction}/>
      <TransactionsList transactions={filteredTransactions}/>
    </div>
  );
}

export default AccountContainer;
