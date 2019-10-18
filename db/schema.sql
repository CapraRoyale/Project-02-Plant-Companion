### Schema
USE plant_companion;

CREATE TABLE plants
(
    id INT NOT NULL AUTO_INCREMENT,
	plant_name VARCHAR (255) NOT NULL,
	details VARCHAR(255),
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE good_companion
(
    helpee_id INT NOT NULL,
    helper_id INT NOT NULL,
    relationship VARCHAR(255),
    FOREIGN KEY (helpee_id) REFERENCES plants(id),
    FOREIGN KEY (helper_id) REFERENCES plants(id)
);


CREATE TABLE bad_companion
(
    hinderee_id INT NOT NULL,
    hinderer_id INT NOT NULL,
    relationship VARCHAR(255),
    FOREIGN KEY (hinderee_id) REFERENCES plants(id),
    FOREIGN KEY (hinderer_id) REFERENCES plants(id)
);