import './App.css'
import { Suspense, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'



const fetchCustomerTickets = async () => {
  const res = await fetch("/ticket.json")
  return res.json()
}

function App() {

  const [inProgress, setInProgress] = useState(0)

  const [selectedCards, setSelectedCards] = useState([])
  
  
  
  const customerPromise = fetchCustomerTickets()

  return (
    <>
      <Navbar></Navbar>

      <Banner selectedCards = {selectedCards}></Banner>

      <Suspense>
        <CustomerTickets selectedCards={selectedCards} setSelectedCards={setSelectedCards} setInProgress = {setInProgress} customerPromise = {customerPromise}></CustomerTickets>
      </Suspense>
    </>
  )
}

export default App
