var count = 0;
var counter = document.getElementById('count');

function increaCount() {
    ++count;
    render();
}

function render() {
    counter.innerHTML = count;
}
render();
// Tạo 1 button mới nằm dưới p
// Viết code sao cho khi click button đó thì giá trị biến `count` tăng 1 đơn vị và nội dung của `counter` cũng thay đổi theo`