// Mail
// Chiedi all’utente la sua email con un prompt
const mailUser = prompt('inserisci la tua mail');
console.log(mailUser);
// controlla che sia nella lista di chi può accedere
// - forma una lista con un array
const mailList = ["alexcapoluongo@icloud.com", "alexcapoluongo@gmail.com", "alex.capo@live.it", "alex23aprile@gmail.com"];
console.log(mailList);

// -con un for controlla se la mail inserita dall'utente è presente nell'array
let mailAccepted = false;
for (let i = 0; i < mailList.length; i++ ) {
    const validMail = mailList[i];
    if (mailUser === validMail) {
        mailAccepted = true;
    }   
}

// stampa un messaggio appropriato sull’esito del controllo.
if (mailAccepted === true) {
    console.log('your mail is in the list');
} else {
    console.log('you are not allowed to enter');
}

