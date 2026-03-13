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

  const [inProgress, setInProgress] = useState(0)

  const [selectedCards, setSelectedCards] = useState([])
  
  const removeTaskStatus = (c) =>{
    const filterData = selectedCards.filter(card => card.id !==c.id)
    // console.log(filterData)
    setSelectedCards(filterData)
  }
  
  const customerPromise = fetchCustomerTickets()

  return (
    <>
      <Navbar></Navbar>

      <Banner selectedCards = {selectedCards}></Banner>

      <Suspense>
        <CustomerTickets removeTaskStatus={removeTaskStatus} selectedCards={selectedCards} setSelectedCards={setSelectedCards} customerPromise = {customerPromise}></CustomerTickets>
      </Suspense>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
