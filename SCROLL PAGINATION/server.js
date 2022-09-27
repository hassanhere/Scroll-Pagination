const express =require("express")
const app=express()
const connectDB=require('./config/db')
const cors=require('cors')


//CONNECT DATABASE
connectDB()


//MIDDLEWARE
app.use(express.json())
app.use(cors())

const PORT=process.env.PORT||5000

// app.use('/api/auth',require('./routes/auth'))
// app.use('/api/users',require('./routes/users'))
app.use('/api/contacts',require('./Routes/Routes_model'))

//tehrim sani@gmail.com 1207568

app.listen(PORT,()=>console.log(`server started on port ${PORT}`))