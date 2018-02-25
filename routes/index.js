var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
    // res.send('this is something else');
    console.log('somethng is runniing atleast');
    testDatabase.testDatabase();
});*/

router.get('/',function(req,res){
    //if(err)
    //    throw err;
    console.log('Redirecting');
    //res.redirect('/catalog');
   // res.render()
    /*res.redirect('/catalog').then(()=>{
        console.log('Redirected!!');
    },(e)=>{
        console.log("Can't be redirected!!");
    });*/
    console.log("Rendering index");
    res.render('index');
});
// router.get('/signup', function() {
//     console.log("signing up");
//     res.render(signup);
// });

module.exports = router;
