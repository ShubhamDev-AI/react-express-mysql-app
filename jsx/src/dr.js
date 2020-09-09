import React from 'react';
import './body.css';

const Search = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
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
                                <form action="/examples" method="post">
                                <div class="form-group"> 
                                    <input type="text" class="form-control" id="userName" placeholder="UserName" required />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" required />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="ipAddress" placeholder="IP Address" required />
                                </div>
                            
                         <input type="submit" class="btn btn-primary" value="Search" onClick={onClick} />
                                  { showResults ? <Results /> : null }
                            
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
  
  const Results = () => (
    <div id="results" className="search-results">
      Some Results
    </div>
  )

  export default Search;