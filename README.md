An express project for displaying the booking system of airlines orchestrating the code structure as well as tests 


`src` -> All actual srource code regarding project resides. Doesn't includes any kind of tests. Sepaarte tests folder for this

# Inside src folder

 ->  `config`-> any configurations or setup of lib is done here. Ex, setting up dotenv, or logging library , etc .

 ->   `routes`->In the routes folder, we register a route and the corresponding middleware when someone calls that route

 -> `middlewares`-> Just going to intercept the incomg req which we can write our validators , authneticators etc

 -> `controllers`-> Here we receive the incoming requests and data and then pass it to the business layer , and once business layer retruns an output , westructure the API response in controllers and send them as output

 ->  `repositories`-> this folder contains all the logic using which we connect with the DB by writing queries, all the raw queries or ORM queries will go here.


 ->  `services` -> contaisn the business logic and interacts with repositories from the database

->  `utils` -> contains helpers methods

### Setup of the project

 npm install

-> In root diectory create a '.env' file and add env variables, like PORT

-> go inside the src folder and execute the following command
    `npx sequelize init`

  - If setting up development environment , then write the username of your db,password of db and in dialect write whatever db youare usig liek mysql,mariadb,etc

  -  Similarly for prod environment, make sure you also replace same things

