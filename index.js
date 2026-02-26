const express = require('express');
require('dotenv').config()
const { Sequelize } = require('sequelize')
const { engine } = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('connect-flash');

const app = express();

const conn = require('./db/conn')



// Models
const Tought = require('./models/Tought')
const User = require('./models/User')

//Import Routes

const toughtsRoutes = require('./routes/toughtsRoutes');
const authRoutes = require('./routes/authRoutes')

// Import Controller
const ToughtsController = require('./controllers/TougthsController');

// template engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// receber resposta do body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// session middleware
app.use(
    session({
        name: "session",
        secret: "nosso_secret",
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function () { },
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false,

            expires: new Date(Date.now() + (1000 * 60 * 60 * 5)),
            httpOnly: true
        }
    })
)

// flash messages
app.use(flash())

// public path
app.use(express.static('public'))

// set session to res 
app.use((req, res, next) => {
    // Verifique se você está pegando o flash() e passando para o locals
    res.locals.messages = req.flash();
    next();
});

app.use((req, res, next) => {
    res.locals.session = req.session
    next()
})

//Routes

app.use('/toughts', toughtsRoutes)
app.use('/', authRoutes)
app.get('/', ToughtsController.showToughts)

const PORT = process.env.PORT || 3000

conn
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch((err) => console.log(err))