import React,{useState} from 'react';
import './body.css';
import axios from 'axios';

 function Body() {

    const [values, setValues] = useState({
        host: 'localhost',
        user: 'root',
        password:'password',
        buttonText: 'Submit'
    });

    const { host ,user ,password,buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/db',
            data: { host,user,password }
        })
            .then(response => {
                console.log('Login SUCCESS',response.data.response );
               
               response.data.response.forEach(
                 function(element) {
                    console.log(element.Database);
                       
                })
                   
                setValues({ ...values, host: '', user: '', password: '', buttonText: 'Submitted' });
                // save the response (user, token) localstorage/cookie
                
            })
            .catch(error => {
                console.log('login ERROR', error.response);
                setValues({ ...values, buttonText: 'Submit' });
                
            });
    };

   return (
            <div class="container-fluid">
    <div class="row">
        <div class="col-md-3 ">
            <h4>1.Select Format</h4>
            
                <div class="form-group">
                    <label class="d-block">
                        <input id="checkbox" type="checkbox" class="mr-1" name="sports" /> 
                        <i class="fas fa-database"></i> Database
                    </label>
                    <div id="delivery" style={{display:"none"}}>
                            <form >
                            <div class="form-group"> 

                                <input placeholder="Host" id="host" onChange={handleChange('host')} value={host} type="text" className="form-control" required />

                            </div>
                            <div class="form-group">
                                
                                <input onChange={handleChange('user')} value={user} type="text" className="form-control" required/>

                            </div>
                            <div class="form-group">
                                 

                                <input onChange={handleChange('password')} value={password} type="password" className="form-control" required />
                            </div>
                                    <button type="submit" class="btn btn-primary" onClick={clickSubmit}>Submit</button>
                        
                            </form>
                    </div>
                        <hr/>
                    {/* CSV FILE  */}
                    <label class="d-block">
                        <input id="checkbox_csv" type="checkbox" class="mr-1" name="sports" /> 
                        <i class="fas fa-file-csv"></i> 
                        CSV
                    </label>

                    <div id="delivery_csv" style={{display:"none"}}>
                    <form action="" method="post" enctype="multipart/form-data" id="js-upload-form">
                                <div class="form-group"> 
                                    <input type="file" name="files[]" multiple />
                                </div>
                                <div class="form-group">
                                <button type="button" class="btn btn-primary start btn-sm" data-ng-              click="submit()">
                                            <i class="glyphicon glyphicon-upload"></i>
                                            <span>Start upload</span>
                                </button>
                            </div>
                                <button type="reset" class="btn btn-warning cancel btn-sm">
                                            <i class="glyphicon glyphicon-ban-circle"></i>
                                            <span>Cancel upload</span>
                                </button>
                                
                             </form>
                    </div>
                    
                </div>
         
        </div>
        <div class="col-md-3 ">
            <h4>2.Select Source</h4>
            
            <p><a href="#"  class="btn btn-success">Learn More »</a></p>
        </div>
        <div class=" col-md-6 ">
            <h2>3. Visualizer</h2>
            <p>Bootstrap is a powerful front-end framework for faster and easier web development. Our Bootstrap tutorials will help you to learn all the features of latest Bootstrap 4 framework so that you can easily create responsive websites.</p>
            <p><a href="#" class="btn btn-success">Learn More »</a></p>
        </div>
    </div>
            
        </div>
        
    )
}

export default Body
