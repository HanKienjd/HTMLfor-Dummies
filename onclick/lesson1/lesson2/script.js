// Viết code sao cho khi ấn vào nút `Clear`, chữ trong input sẽ bị xoá
// Kiểm tra bằng cách gõ chữ vào ô tìm kiếm vào ấn `Clear`
function clearValue() {
    var input = document.getElementById('searchBox');
    input.value = '';
    render();
}