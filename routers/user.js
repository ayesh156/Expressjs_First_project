const express = require('express')
const router = express.Router();

router.route('/')
.get((req,res)=>{
    res.send(req.id);
})
.post((req, res) => {
    res.send(req.body)
  });

  router.get('/add',(req,res)=>{
    res.send('user add from');
});


module.exports = router;