### set up routes
1. clone the repository
2. install all dependency
3. cd POLLING-SYSTEM
4. nodemon index.js

## Api Routes


1) create question :  localhost:3000/api/questions/create
-  method : POST
-  body:
        {
            "title":"what is your name"
        }

2) add options to selected question:  localhost:3000/api/questions/657c75d0830c1757e11c0e4f/options/create
- method : POST
- body:
        {
            "text":"option one newest"
        }

3) delete question : localhost:3000/api/questions/657c8a766b37f02adae9e2d8/delete
- method: DELETE


4) adding vote to option : localhost:3000/api/options/657c80b2e104536753435058/add_vote
- method: GET


5) delete option by id : localhost:3000/api/options/657c8a886b37f02adae9e2e0/delete
- method: DELETE

6) get all questions : localhost:3000/api/questions/657ca673f8c01d9006786da4
- method:GET
