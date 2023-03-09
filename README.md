TEST

* Open up the Terminal and install postgresql with brew: brew install postgresql
* After the installation is complete, we’ll want to get postgresql up and running, which we can do with services start: brew services start postgresql , If at any point you want to stop the postgresql service, you can run brew services stop postgresql.
￼
POSTGRESQ:
To create that database, simply type: $ createdb If you do not want to use your database anymore you can remove it. For example, if you are the owner
(creator) of the database mydb, you can destroy it using the following command: $ dropdb mydb
Accès to this database : psql <name>

Creating tables :
	create table challenges ( id SERIAL NOT NULL ,
						    name varchar(255) NOT NULL ,
					            tags varchar(255) NOT NULL ,
						   PRIMARY KEY (id));
￼

create table contents ( id SERIAL NOT NULL , 
					user_id int NOT NULL,
					challenge_id int NOT NULL,
					image_url varchar(255) NOT NULL ,
					likes int ,		
					PRIMARY KEY (id) ,
				CONSTRAINT fk_user_cnt
					FOREIGN KEY(user_id) 
     				        REFERENCES users(id),
				CONSTRAINT fk_chll_cnt
					FOREIGN KEY(challenge_id) 
     				        REFERENCES challenges(id));

￼

CREATE TYPE gender_type AS ENUM (‘FEMALE’,’MALE’); 
create table users ( id SERIAL NOT NULL , 
					first_name varchar(255) NOT NULL,
					last_name varchar(255) NOT NULL,
					email varchar(255) NOT NULL,
					instagram_uname varchar(255) NOT NULL ,
					gender gender_type NOT NULL,				
					PRIMARY KEY (id) );
￼

SERVER :
		Npm install express pg cors : express for creating a server in nodeJs , cors: allows diff domain of app to interact with each other -> server on localhost 5000 and react in localhost 3000 ….pg for connecting our DB with server to handle postgres queries ….
￼

Running the server , I used , nodemon which is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Client:
npx create-react-app client 
