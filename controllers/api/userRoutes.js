const router = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const auth = require('../../utils/auth');


 router.post('/', async (req, res) => {
         try {
            const UserData = await User.create({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password,
           });
    
        req.session.save(() => {
          req.session.user_id = UserData.id;
          req.session.logged_in = true;
    
          res.status(200).json(UserData);
        });
   } catch(err) {
        console.log(err);
        res.status(500).json({message: "An error occurred, please try again. If problem persists, contact us"});
    }
 });

router.post('/login', async (req, res) => {
    try {
        const userDb = await User.findOne({
            where: {
                email: req.body.email,
            }
        });

        if (!userDb) {
            res.status(404).json({message: 'Account not found. Please retry or create an account.'});
            return;
        }

        const validPassword = await bcrypt.compare(req.body.password, userDb.password);
        if (!validPassword) {
            res.status(404).json({message: 'Your password is incorrect. Please try again or create a new account. '});
            return; 
        }

        req.session.save(() => {
            req.session.logged_in = true;
            req.session.user_id = userDb.id
            res.status(200).json({message: 'Logged in!'});
        });

    } catch(err) {
        res.status(500).json({message: "An error occurred."});
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {

      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;