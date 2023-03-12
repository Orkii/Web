const registrationButton = document.querySelector('.registerButton');
//const registrationBlock = document.querySelector('.registration-frame');

if (registrationButton !== null)
registrationButton.addEventListener('click', () => {
    window.location.href = "registration.html";
})

function validateForm(){
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('confirm-password').value;

    if (!name || !username || !password || !password2) alert("Заполните все поля.");
    else if (password !== password2) alert("Пароли должны совпадать.");
    else if(confirm("Вы уверены, что хотите зарегистрироваться под именем " + name + ", с ником " + username + ", и паролем "+ password +"?"))
        window.location.href = "index.html";
        else location.reload();

}
// registrationButton.addEventListener('click', () => {
//     registrationBlock.style.display = 'block';
// });

// document.addEventListener('click', (event) => {
//     //if (!registrationBlock.contains(event.target) && !registrationButton.contains(event.target)){
//         if (event.target !== registrationBlock && event.target !== registrationButton) {
//         console.log("hello");
//         registrationBlock.style.display = "none";
//     }
// });