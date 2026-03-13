import './App.css'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Footer from './components/Footer/Footer';



const fetchCustomerTickets = async () => {
  const res = await fetch("/ticket.json")
  return res.json()
}

function App() {

  const [selectedCards, setSelectedCards] = useState([]);



const [resolvedTasks, setResolvedTasks] = useState([]);

const handleCompleteTask = (task) => {
    const remaining = selectedCards.filter(card => card.id !== task.id);
    setSelectedCards(remaining);
    setResolvedTasks([...resolvedTasks, task]);
  };
  
  
  
  const removeTaskStatus = (c) =>{
    const filterData = selectedCards.filter(card => card.id !==c.id)
    setSelectedCards(filterData)
  }
  
  const customerPromise = fetchCustomerTickets()

  return (
    <>
      <Navbar></Navbar>

      <Banner selectedCards = {selectedCards} resolvedTasks={resolvedTasks}></Banner>

      <Suspense>
        <CustomerTickets  
          handleCompleteTask={handleCompleteTask} 
          resolvedTasks={resolvedTasks} 
          removeTaskStatus={removeTaskStatus} 
          selectedCards={selectedCards} 
          setSelectedCards={setSelectedCards} 
          customerPromise = {customerPromise}>

        </CustomerTickets>
      </Suspense>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
