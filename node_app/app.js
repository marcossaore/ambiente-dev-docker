const express = require("express")
const apiRouter = express.Router()

const APPLICATION = "MYAPP"

const app = express()

apiRouter.get("/healthCheck", (req, res) =>{
    res.status(200).json({
        message : "api is running..."
    })
})

app.use('/api/v1', apiRouter)

app.listen(3000, () =>{
    console.log(`LISTEN ${APPLICATION} PORT 3000`)
})