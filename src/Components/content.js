import React,{Component} from 'react';

class Content extends Component{

    
    render(){
        return(
         <div>
              <h1>Hello world</h1>

               <h2>It is {new Date().toLocaleTimeString()}.</h2>
         </div>

        );
    }
}

//mark it for export 
export default Content;