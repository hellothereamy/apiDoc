## Created by Amy Tran 

## How to Run the Project
run `npm install` 
then run `npm start` to start the server


## How to Render ExplorerComponent

ExplorerComponent uses the JSON object I defined in ListComponent. 
To render this component, you must pass in:
```
  <ExplorerComponent
          key = {} // best practices when looping, use the index as the key
          url= {} // base URL for the api 
          title = {} // Title of API method
          method={} // API Method
          headers={} //Headers
          body={} //body of request (usually user inputs)
  />
 ```

## Ant Design Library
  
I used this library because to be honest, it looked sleek. I don't have much experience with this design library 
and I'm not sure if I recommend it because the documentation is a little confusing... :) (just throwing out my 2 cents)
Ant Design: https://ant.design/

