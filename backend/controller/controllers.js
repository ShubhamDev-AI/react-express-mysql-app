const mysql = require('mysql');

exports.dbconn = (req, res) => {
    // console.log('REQ BODY ON SIGNUP', req.body);
   

    const { host,user,password } = req.body;
    
        console.log('REQ BODY ON SIGNUP', req.body);
          
          console.log(host);
                     //db connection
                            const connection = mysql.createConnection({
                                host: host,
                                user: user,
                                password: password
                                //database: 'database name'
                            });
                            connection.connect(function(err) {
                                if (err) {
                                    console.error('Error connecting: ' + err.stack);
                                    return;
                                }
                            
                                console.log('Connected as id ' + connection.threadId);
                            });
                            
                            var query = connection.query('SHOW DATABASES',  (error, results, fields) => {
                                if (error)
                                    throw error;
                            
                              /*  results.forEach(result => {
                                    
                                    console.log(result);
                                    
                                });*/
                                res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                            });
                            

};