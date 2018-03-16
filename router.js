let userController = require('./controller/userController');

// Routes
module.exports = function(app){
// Main Routes
app.get('/', userController.Index);
app.post('/reg', userController.register)
app.get('/sign-in', userController.signin)  
};
