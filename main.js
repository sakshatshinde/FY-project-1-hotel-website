// Initialize Firebase
var config = {
    apiKey: "AIzaSyC2WZszn1wDbq2UbwfwmX8uZ7gENGOplUs",
    authDomain: "contactform-e25c0.firebaseapp.com",
    databaseURL: "https://contactform-e25c0.firebaseio.com",
    projectId: "contactform-e25c0",
    storageBucket: "",
    messagingSenderId: "189740115563"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');
//Listen for form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    //Getting Values
    var name = getInputVal('name');
    var numberOfRooms = getInputVal('numberOfRooms');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    //save message
    saveMessage(name, numberOfRooms, email, phone, message);

    //popup alert

    document.querySelector('.alert').style.display = 'block';

    //Hiding alert after some time

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    
    //clearing the input fields
    document.getElementById('contactForm').reset();
    
}



//Function to get form vals

function getInputVal(id){
    return document.getElementById(id).value;
}

//Save mesaages to firebase 

function saveMessage(name, numberOfRooms, email, phone, message){
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
         name: name,
         numberOfRooms: numberOfRooms,
         email: email,
         phone: phone,
         message: message
     });
}