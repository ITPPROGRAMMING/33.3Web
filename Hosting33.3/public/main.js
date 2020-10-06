// FORM SIGNIN
const signInForm = document.querySelector('#sign-up-form');

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailIn = document.querySelector('#E-mail').value;
    const paswordIn = document.querySelector('#pswdTxt').value;

    auth
    .signInWithEmailAndPassword(emailIn, paswordIn)
    .then(userCredential => {

        console.log('inicio de secion exitoso')
    })
}) 
auth.onAuthStateChanged(function(user) {
    if(user) {
        document.getElementById('#text').innerHTML = emailIn
    } else {
        settBTN
        console.log('sin datos')
    }
})

// Mobile Mode Button
document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});


//Scroll reveal
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.social', {delay: 200});
ScrollReveal().reveal('.footer-links, footer', {delay: 300});
ScrollReveal().reveal('.proximo', {delay: 700});
ScrollReveal().reveal('.showcase-News-one', {delay: 700});



//Card View Withaut the BackEnd
const baseRequest = {
	apiVersion: 2,
	apiVersionMinor: 0
};

const tokenizationSpecification = {
	type: 'PAYMENT_GATEWAY',
	parameters: {
	    'gateway': 'example',
	    'gatewayMerchantId': 'exampleGatewayMerchantId'
	}
};