import express from 'express'

const app = express();

app.listen(3333, () => {
  console.log('app is running on 3333')
})