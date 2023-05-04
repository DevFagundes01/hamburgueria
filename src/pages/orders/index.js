import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"

import axios from "axios";

import burger from '../../assets/bag.png'
import trash from '../../assets/trash.svg'

import Div1 from "../../components/Div1";
import H1 from "../../components/Title";
//import Button from "../../components/Button";

import {
  Div,
  Image,
  Li,
  Div2,
  Div3,
  Button,
} from "./styles"

const Order = () => {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

useEffect(() => {
  async function fetchOrders() {
    const {data: newOrders} = await axios.get("http://localhost:3001/order")

    setOrders(newOrders)
  }
  fetchOrders()
}, [])



  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`)
    const newOrders = orders.filter((order) => order.id !== orderId)
    
    setOrders(newOrders)
  }

  function goBackPage() {

    navigate("/")
  }

  return (
    <Div>
      <Div1>
        <Image src={burger} alt="img-burger"></Image>

        <H1>Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <Li key={order.id}>
              <Div2>
                <Div3>
                 {order.order} 
                </Div3> 
              <br></br>
                <Div3>
                 {order.name} 
                </Div3> 
              </Div2>
              <button onClick={() => deleteOrder(order.id)}>
                <img src={trash} alt="lixo"></img>
              </button>
            </Li>
          ))}
        </ul>
        <Button isGrey={true} onClick={goBackPage}>Voltar</Button>
      </Div1>
    </Div>
  )
}

export default Order