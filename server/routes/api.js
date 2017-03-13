const express = require('express');
const router = express.Router();
const unirest = require('unirest');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Api Works!');
});

router.get('/getPrimeroTabla', (req, res, next) => { 
    unirest.get("http://apiclient.resultados-futbol.com/scripts/api/api.php?key=0d323a7dac83c9036054602f3c633486&tz=Europe/Madrid&format=json&req=tables&league=1")    
    .header("Accept", "application/json")
    .end(function (result) {
        var maxPoint=Math.max.apply(Math,(result.body.table).map(function(o){return o.points;}));
        var equipos=result.body.table;
        var i=0, len=equipos.length;
        for (; i<len; i++) {
          if (+equipos[i].points == +maxPoint) {            
            res.send(equipos[i]); 
          }
        }               
    }) ;

});


router.get('/tablaResultados/:anio([0-9]+)', (req, res, next) => {
//http://apiclient.resultados-futbol.com/scripts/api/api.php?key=ac5705d8d3a7b417ef0798b4c9f9b427&format=json&req=leagues
    console.log(req.params, req.params.anio);
    unirest.get("http://apiclient.resultados-futbol.com/scripts/api/api.php?key=0d323a7dac83c9036054602f3c633486&tz=Europe/Madrid&format=json&req=tables&league=1&year="+req.params.anio)    
    .header("Accept", "application/json")
    .end(function (result) {
        res.send(result.body.table);
    }) ;   

});

module.exports = router;
