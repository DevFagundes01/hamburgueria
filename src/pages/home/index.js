import React, { useState, useRef, } from "react";
import {useNavigate} from "react-router-dom";

import axios from "axios";

import burger from '../../assets/burger 1.png'

import Div1 from "../../components/Div1";
import  H1  from "../../components/Title";
import Button from "../../components/Button";

import {
  Div,
  Image,
  Inputlabel,
  Input,
} from "./styles"

const App = () => {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
  const inputOrder = useRef()
  const inputName = useRef()
  const baseUrl = "https://rotas-pedidos.vercel.app"

  async function addNewOrder() {
    const {data: newOrder} = await axios.post(`${baseUrl}/order`, {
      order: inputOrder.current.value, 
      name: inputName.current.value,
    })
  
    setOrders([
      ...orders, newOrder
    ])

    navigate("/orders")
  }

  return (
    <Div>
      <Div1>
        <Image src={burger} alt="img-burger"></Image>

        <H1>Faça seu pedido!</H1>

        <Inputlabel>Pedido</Inputlabel>
        <Input ref={inputOrder} ></Input>

        <Inputlabel>Nome do Cliente</Inputlabel>
        <Input ref={inputName} ></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </Div1>
    </Div>
  )
}

export default App 