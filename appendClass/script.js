/* var list = document.getElementsByTagName("p"); */
var list = document.getElementsByClassName('foo');
for (var i of list) {
    i.innerHTML = i.innerHTML + '<a href="https://coders-x.com/" > coders - tokyo </a>';
}