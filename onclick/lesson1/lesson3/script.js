// Viết code sao cho khi nhập tên ai đó vào ô input, click vào nút Say Hi! sẽ hiển thị ra alert box với nội dung: Hi kèm theo tên người đó. Ví dụ: Hi Coders.Tokyo
function addName() {
    var input = document.getElementById('name');
    var newItem = input.value;
    alert("Hi " + newItem);
    // render();
}