/* ********************************* Import Node Modules ********************************* */

/* ********************************* Import Local Modules ********************************* */
const {
    userController, practiceController, patientController
} = require('./controllers');
const { validator, authenticator } = require('./middlewares');
const { logger } = require('./utils');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send({ status: true, message: req.csrfToken() });
        logger.info('csrf token recieved');
      });

      // user apis
      app.post('/registerPractice', validator, userController.registerPractice);

      app.post('/login', validator, userController.login);

      // staff-practice apis
      app.post('/practice/:id/registerServices',authenticator, validator, practiceController.registerServices);
      
      app.post('/practice/:id/registerPrices', authenticator, validator, practiceController.registerPrices);
      
      app.post('/practice/:id/registerTimings', authenticator, validator, practiceController.registerTimings);

      app.post('/pratice/:id/addSlot', authenticator, validator, practiceController.addSlot );
      
      // patient apis
}