document.addEventListener("DOMContentLoaded", function() {
    var submitButtons = document.getElementsByClassName("submit-button");
    for (var i = 0; i < submitButtons.length; i++) {
        submitButtons[i].addEventListener("click", function() {
            // Проверка на заполненность полей
            var name = document.getElementById("Name").value;
            var phone = document.getElementById("Phone").value;
            var message = document.getElementById("message").value;

            if (Name && Phone && message) {
                alert("Сообщение успешно отправлено");
            } else {
                alert("Пожалуйста, заполните все обязательные поля.");
            }
        });
    }
});