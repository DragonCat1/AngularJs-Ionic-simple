const Express = require('express')

const app = new Express()
app.use(Express.static('app'))
app.listen(8080)
