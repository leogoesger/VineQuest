// import $ from 'jquery';
// import Foundation from 'foundation-sites';
// import whatInput from 'what-input';
$(document).ready(function() {


    // window.$ = $;


    // If you want to pick and choose which modules to include, comment out the above and uncomment
    // the line below
    //import './lib/foundation-explicit-pieces';


    //    $(document).foundation();

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBWqjaCO-Olwa0-z-lihkDuK7nSLXI4BCw",
        authDomain: "vineyardsearch.firebaseapp.com",
        databaseURL: "https://vineyardsearch.firebaseio.com",
        projectId: "vineyardsearch",
        storageBucket: "",
        messagingSenderId: "605883901058"
    };
    firebase.initializeApp(config);


    // Create a variable to reference the database.
    var database = firebase.database();

   
    // Initial Values

    var name = "";

    var email = "";

    var password = "";


    // For the Index Page
    // Capture user information and add to the 'users' database
    $("#signup").on("click", function(event) {
        event.preventDefault();

        // Collecting inputs.  
        name = $("#full-name").val();
        email = $("#email").val();
        password = $("#password-input").val();
        
        console.log(name);
        console.log(email);
        console.log(password);
       
        
        // taking the inputs and pushing into the 'users' database
        database.ref('users').push({
            name: name,
            email: email,
            password: password,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    });

    // For the Index Page
    // Capture user information and add to the 'users' database
    $("#signin").on("click", function(event) {
        event.preventDefault();

        // Collecting inputs.  
        name = $("#name-input").val();
        email = $("#email-input").val();
        password = $("#password-input").val();
       

        console.log(name);
        console.log(email);
        console.log(password);
        
        
        // taking the inputs and pushing into the 'users' database
        database.ref('users').push({
            name: name,
            email: email,
            password: password,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    });

   

})