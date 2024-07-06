<h2 class="title">  Full-Stack Web App
</h2>
### Briefing
<p class="briefing">
This is a web-based full-stack web application that completely separates the client-side from the server-side.
It is an app that simulates keeping track of information called 'Contacts'. Contacts' information consist of a First name, last name, and email.
This app demonstrates a scenario, for example, that companies use to keep track of employees.
<br>
<!-- Date Started:  -->
</p>

<div id="main_image">
    <img src="data/PYTHON/fullstack_web_app/resources/fullstack_app_res_1.png"/>
    <img src="data/PYTHON/fullstack_web_app/resources/fullstack_app_code_1.png"/>
    <img src="data/PYTHON/fullstack_web_app/resources/fullstack_app_res_2.png"/>
    <img src="data/PYTHON/fullstack_web_app/resources/fullstack_app_code_2.png"/>
</div>



### Elaboration
<p class="elaboration">
    Unlike my previous projects that used the Flask API to modify the frontend before serving, this app demonstrates how the server-side is used strictly to receive requests, receive data and process it, and then serve it to frontend JavaScript, while the modifying of the information the client sees is done by the JavaScript.
    It uses NodeJS, hence the client-side is run from its own server entry point, while the server-side also has its own.
    Because the serve-side needs to communicate across the different domains, I disable the CORS restriction using the Python CORS module.
    This app enables one to add new Contacts, update them and delete them.
</p>

###  References
<p class="references">
    Tech With Tim on Youtube, "Python + JS Full Stack App Tutorial"
</p>