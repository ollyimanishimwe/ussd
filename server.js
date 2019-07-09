const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 3030

app.use(logger('dev'))         
app.use(bodyParser.json())    
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {
  res.send('CON This is a Game prepaid USSD App')
})

app.post('*', (req, res) => {
  let {sessionId, serviceCode, phoneNumber, text} = req.body
  if (text == '') {
    // This is the first request. Note how we start the response with CON
    let response = `CON Welcome to GAME-PREPAID choose a suitable game
    1. Mukura VS APR
    2. Rayon VS Kiyovu
    3. Police VS Marine`
    res.send(response)
  } else if (text == '1') {
    // Business logic for first level response
    let response = `CON Mukura VS APR 
    Match Time:15:30
    Place: Huye Stadium
    Choose a price
    1. V-VIP:10 000 rwf
    2. VIP: 5000 rwf
    3. REST: 3000 rwf`
    res.send(response)
  } else if (text == '2') {
    // Business logic for first level response
    let response = `CON Rayon VS Kiyovu 
    Match Time:18:30
    Place: Amahoro Stadium
    Choose a price
    1. V-VIP:20 000 rwf
    2. VIP: 5000 rwf
    3. REST: 1000 rwf`
    res.send(response)
  } else if (text == '3') {
    // Business logic for first level response
    let response = `CON Police VS Marine 
    Match Time:16:30
    Place: Umuganda Stadium
    Choose a price
    1. V-VIP:5 000 rwf
    2. VIP: 3000 rwf
    3. REST: 1000 rwf`
    res.send(response)
  }
  else if (text == '1*1') {
    // Business logic for first level response
    // let accountNumber = 'ACC1001'
    // This is a terminal request. Note how we start the response with END
    // let response = `END Your account number is ${accountNumber}`

    let response = `CON Choose the payment you use 
    
    1. Mobile Money
    2. Aitel/Tigo
    3. Bank`
    res.send(response)
  } else if (text == '1*2') {
    // Business logic for first level response
    // let accountNumber = 'ACC1001'
    // This is a terminal request. Note how we start the response with END
    // let response = `END Your account number is ${accountNumber}`

    let response = `CON Choose the payment you use 
    
    1. Mobile Money
    2. Aitel/Tigo
    3. Bank`
    res.send(response)
  } 
  else if (text == '1*3') {
    // Business logic for first level response
    // let accountNumber = 'ACC1001'
    // This is a terminal request. Note how we start the response with END
    // let response = `END Your account number is ${accountNumber}`

    let response = `CON Choose the payment you use 
    
    1. Mobile Money
    2. Aitel/Tigo
    3. Bank`
    res.send(response)
  }
  else if (text == '1*1*1') {
    // Business logic for first level response
    // let accountNumber = 'ACC1001'
    // This is a terminal request. Note how we start the response with END
    // let response = `END Your account number is ${accountNumber}`

    var readline = require('readline-sync');

    var name = readline.question("What is your name?");

    console.log("Hi " + name + ", nice to meet you.");

    // let response = `CON MoMo Pay, Give your Phone number`
    // res.send(response)
    // const phone = req.body.phone;
  }
  else if (text == '1*1*1') {
    // Business logic for first level response
    // let accountNumber = 'ACC1001'
    // This is a terminal request. Note how we start the response with END
    // let response = `END Your account number is ${accountNumber}`

    let response = `CON MoMo Pay, Give your Password to confirm`
    res.send(response)
  }
  else if (text == '1*1') {
    // Business logic for first level response
    // let accountNumber = 'ACC1001'
    // This is a terminal request. Note how we start the response with END
    // let response = `END Your account number is ${accountNumber}`

    let response = `CON Choose the payment you use 
    
    1. Mobile Money
    2. Aitel/Tigo
    3. Bank`
    res.send(response)
  }
  else if (text == '1*1') {
    // Business logic for first level response
    // let accountNumber = 'ACC1001'
    // This is a terminal request. Note how we start the response with END
    // let response = `END Your account number is ${accountNumber}`

    let response = `CON Choose the payment you use 
    
    1. Mobile Money
    2. Aitel/Tigo
    3. Bank`
    res.send(response)
  }
  else {
    res.status(400).send('Bad request!')
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})