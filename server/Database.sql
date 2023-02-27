
create table challenges ( id SERIAL NOT NULL ,
						    name varchar(255) NOT NULL ,
					            tags varchar(255) NOT NULL ,
						   PRIMARY KEY (id));
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

-- CREATE TYPE gender_type AS ENUM (‘FEMALE’,’MALE’); 
create table users ( id SERIAL NOT NULL , 
					first_name varchar(255) NOT NULL,
					last_name varchar(255) NOT NULL,
					email varchar(255) NOT NULL,
					instagram_uname varchar(255) NOT NULL ,
					gender gender_type NOT NULL,				
					PRIMARY KEY (id) );