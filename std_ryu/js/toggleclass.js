// $body 라는 폴더(변수)에 마법의 장바구니를 넣는다.
var $body = window.$('body');
// 할일이라는 폴더(변수)에 함수를 넣는다.
function 할일() {
    var $div = $('section > div');
    //$div.removeClass('active');
    //$div.addClass('active');
    $div.toggleClass('active');
}
// $body 안에 들어있는 마법의 장바구니에게 할일이라는 폴더안에 있는 함수를 넘겨주면서 `클릭되면 실행해주세요.` 라고 요청한다.
$body.click(할일);
