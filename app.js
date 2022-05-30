var genarateBtn = document.getElementById('genarate-btn');
genarateBtn.addEventListener('click', function () {

    var inputText = document.getElementById('input-text').value;
    var newItem = document.getElementById('new-item');


    if (inputText == '') {
        alert("Enter your todo");
    } else {
        var createText = document.createTextNode(inputText);
        var createElement = document.createElement('li');
        createElement.appendChild(createText);
        newItem.appendChild(createElement);
    };
});
