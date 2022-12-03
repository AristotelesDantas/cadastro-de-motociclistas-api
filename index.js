const app = require('express')()
const port = 3000
app.set('port', port)

app.get('/', (req, res, next) => {
    return res.json({
        status: 'ok'
    })
})











app.listen(app.get('port'), () => {
    console.log('Servidor tá ok')
})