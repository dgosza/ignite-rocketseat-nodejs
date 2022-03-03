import express from 'express'
import {v4 as uuidv4} from 'uuid'
const app = express();

const customers = []

app.use(express.json())

app.post('/account', (request, response) => {
  const { name, cpf } = request.body;

  //NEW THING: SOME returns true or false. Verify if the customer exists within []
  const customerExists = customers.some(customer => customer.cpf === cpf)
  if (customerExists) {
    return response.status(400).json({error: "Customer already exists!"})
  }

  customers.push({
    cpf, name, id: uuidv4(), statement: []
  })

  return response.status(201).send()

})

app.get('/statement/:cpf', (request, response) => {
  const { cpf } = request.params
  const customer = customers.find(customer => customer.cpf === cpf)
  return response.json(customer.statement)
})

app.listen(3333, () => {
  console.log('backend api is running on 3333')
})