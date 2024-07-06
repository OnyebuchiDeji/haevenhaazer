<h2 class="title">  Interactive Flask Web App
</h2>
### Briefing
<p class="briefing">
A web application with secure user login authentication using password and username, a database to keep store user details, and providing a simple Note service where users can write notes and store them securely on this web app.
<br>
<!-- Date Started:  -->
</p>

<div id="main_image">
    <img src="data/PYTHON/flask_web_app/resources/flask_web_app_res_1.png"/>
    <img src="data/PYTHON/flask_web_app/resources/flask_web_app_code_1.png"/>
    <img src="data/PYTHON/flask_web_app/resources/flask_web_app_res_2.png"/>
    <img src="data/PYTHON/flask_web_app/resources/flask_web_app_res_3.png"/>

</div>



### Elaboration
<p class="elaboration">
It involved the use of Flask and Flask-SQLAlchemy to produce the functionality of a cloud-oriented web app where every user has their own space and data on the app. The cliet's data is served to them by the server-side of the app, which is the same place where user authentication is done. Users can create as many accounts as they want and access the Note creating service. They can create notes, edit them, and delete them.
The UI provides responses that make interaction livelier, such as pop-up messages to show when a user has logged in or logged out, or when a note has been added.
Passwords and user information are stored securely on a database that contains hashed data so it cannot be read from the server-side. I use pbkdf2 hashing, which uses SHA-256 repeatedly, with salting, to make the hashing more secure.
<br>
From this project I became even better versed with the Flask module; I implement the use of blueprints to separate different functionality into their own separate server-side Python scripts; the Blueprints can have their own endpoints, and even their own url prefix or domain begore accessing their endpoints.
<br>
I also create the database models to represent a User and a Note object. SQLAlchemy makes querying easier and more robust, effectively preventing SQL injections because of how it queries the database using Python.
</p>

###  References
<p class="references">
    Tech With Tim, "Python Website Full Tutorial - Flask, Aunthentication, Databases"
</p>