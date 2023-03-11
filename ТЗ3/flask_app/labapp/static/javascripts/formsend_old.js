/*
Реализация AJAX с помощью XMLHttpRequest. Универсальный метод подходящий для всех версий браузеров, в т.ч. и устаревших
*/
var sendbtn = document.getElementById("sendbtn");    // выбираем DOM-елемент (кнопку)

// Привязываем к элементу обработчик события "click"
sendbtn.addEventListener("click", function (e) {
    /* Инструкция preventDefault позволяет переопределить стандартное поведение браузера,
    если ее убрать, то браузер по-умолчанию обновит страницу после отправки данных формы */
    e.preventDefault();
    // Получаем данные полей формы
    let fname = document.getElementsByName("fname")[0].value;
    let lname = document.getElementsByName("lname")[0].value;
    let reqtype = document.getElementsByName("reqtype")[0].value
    let reqtext = document.getElementsByName("reqtext")[0].value
    // Преобразуем полученные данные в JSON
    let formdata = JSON.stringify({ firstname: fname, lastname: lname, reqtype: reqtype, reqtext: reqtext});
    
    /* XMLHttpRequest предоставляет простой способ получения данных по ссылке без перезагрузки страницы.
    Это позволяет обновлять только часть веб-страницы не прерывая пользователя.
    XMLHttpRequest используется в AJAX запросах и особенно в single-page приложениях.*/ 
    let request = new XMLHttpRequest();
    // Инициализируем POST-запрос на адрес "/", аргумент true - асинхронный запрос
    request.open("POST", "/api/contactrequest", true);
    // Устанавливаем заголовки запроса (тип отсылаемых данных)
    request.setRequestHeader("Content-Type", "application/json");

    // Привязываем к запросу обработчик события "load" - окончание загрузки данных 
    request.addEventListener("load", function () {
        // Получаем и парсим ответ сервера
        let receivedUser = JSON.parse(request.response);
        // Выводим ответ сервера в элементе c id = "statusfield"
        let statfield = document.getElementById("statusfield");
        statfield.textContent = receivedUser.message;
        statfield.textContent.bold();
    });

    // После привязки обработчика событий к запросу отправляем данные
    request.send(formdata);
});
