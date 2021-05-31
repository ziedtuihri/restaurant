var client = require('../../../db_connection')

exports.res=(req,res)=>{
  console.log(req.body)
  client.query(`SELECT * FROM  restaurent  WHERE id_category ='${req.body.id_category }' `, function  (err, result) {
    if (err){
        res.status(res.statusCode).json({
            errorCode: err.message,
            status: res.statusCode + " errror"
            
            
          });
    }else{
      if(result.length==0){
        res.status(res.statusCode).json({
          message: "restaurant not found",
          state:404,
          status: res.statusCode,
        });
      }else{

            res.status(res.statusCode).json({
              message: "done",
              data: result,
              status: res.statusCode,
            });

      }
    }
  });
}

exports.add=(req,res)=>{
 
  client.query(` INSERT INTO restaurent (id, name,imege, id_category) VALUES ('${req.body.id}','${req.body.name}','${req.body.imege}','${req.body.id_category}')`, function (err, result) {
      if (err){
          res.status(res.statusCode).json({
              errorCode: err.message,
              status: res.statusCode,
              
            });
      }else{
          res.status(res.statusCode).json({
              message: "done",
              data:result,
              status: res.statusCode,
            });
      }
    });

}