var code = `/* 现在我们要开始画一只哆啦A梦 */
/* 首先画出哆啦A梦的头 */
.head{
    position: absolute;
    top: 30px;
    height: 204px;
    width: 234px;
    border: 2px solid black;
    border-radius: 50%;
    margin-left: -117px;
    left: 50%;
    background: #00A1FF;
}
/* 然后给他加上脸 */
.face{
    position: absolute;
    height: 149px;
    width: 194px;
    border-radius: 50%;
    bottom: 0;
    background: white;
    border: 2px solid black;
    left: 18px;
}
/* 接着画出两只眼睛和中间的眼珠 */
.leftEye{
    position: absolute;
    height: 54px;
    width: 44px;
    top:-25px;
    background: white;
    border-radius: 45%;
    right: 50%;
    border: 2px solid black;
}
.leftEyeball{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: black;
    position: absolute;
    top: 19px;
    left: 18px;
}
.rightEye{
    position: absolute;
    height: 54px;
    width: 44px;
    top:-25px;
    background: white;
    border-radius: 45%;
    left: 50%;
    border: 2px solid black;
}
.rightEyeball{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: black;
    position: absolute;
    top: 19px;
    right: 2px;
}
/* 再把可爱的鼻子画上去 */
.nose{
    width: 24px;
    height: 24px;
    background: #FF0000;
    border: 2px solid black;
    position: absolute;
    top: 20px;
    left: 50%;
    margin-left: -12px;
    border-radius: 50%;
}
/* 现在要给他加上鼻头 */
.tipOfNose{
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    right: 1px;
}
/* 把左右两边的胡须帮他画出来吧 */
.left1{
    width: 50px;
    border: 1px solid black;
    position: absolute;
    top: 42px;
    left: 22px;
    transform: rotate(15deg);
}
.left2{
    width: 50px;
    border: 1px solid black;
    position: absolute;
    top: 58px;
    left: 22px;
    z-index: 1;
}
.left3{
    width: 50px;
    border: 1px solid black;
    position: absolute;
    top: 74px;
    left: 22px;
    transform: rotate(-15deg);
    z-index: 1;
}
.right1{
    width: 50px;
    border: 1px solid black;
    position: absolute;
    top: 42px;
    right: 22px;
    transform: rotate(-15deg);
}
.right2{
    width: 50px;
    border: 1px solid black;
    position: absolute;
    top: 58px;
    right: 22px;
    z-index: 1;
}
.right3{
    width: 50px;
    border: 1px solid black;
    position: absolute;
    top: 74px;
    right: 22px;
    transform: rotate(15deg);
    z-index: 1;
}
.line{
    height: 68px;
    border: 1px solid black;
    position: absolute;
    left: 50%;
    top: 42px;
    margin-left: -1px;
}
/* 画上他的嘴巴让他保持微笑 */
.mouse{
    width: 100px;
    height: 90px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 50%;
    margin-left: -50px;
    background: transparent;
    box-shadow: 0 3px 0 0 black;
}
.leftMouse{
    position: absolute;
    height: 40px;
    width: 20px;
    background: white;
    top: 28px;
    left: -4px;
}
.rightMouse{
    position: absolute;
    height: 40px;
    width: 20px;
    background: white;
    top: 28px;
    right: -4px;
}
/* 现在该画上脖子上的红绳了 */
.neck{
    width: 172px;
    height: 22px;
    position: absolute;
    top: 212px;
    left: 50%;
    margin-left: -85px;
    background: red;
    border: 2px solid black;
    border-radius: 15px;
}
/* 头部基本已经完成啦，现在就要加上身体了 */
.body{
    width: 156px;
    height: 116px;
    background: #00A1FF;
    position: absolute;
    top: 232px;
    left: 50%;
    margin-left: -77px;
    border: 2px solid black;
    border-bottom: transparent;
    z-index: -2;
}
/* 这是他的左臂和左手 */
.leftArm{
    width: 50px;
    height: 42px;
    position: absolute;
    border: 2px solid black;
    transform: rotate(-25deg);
    top: 239px;
    left: 50%;
    margin-left: -115px;
    background: #00A1FF;
    z-index: -3;
}
.leftHand{
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background: white;
    border: 2px solid black;
    position: absolute;
    top: -6px;
    left: 50%;
    margin-left: -66px;
}
/* 这是他的右臂和右手 */
.rightArm{
    width: 50px;
    height: 42px;
    position: absolute;
    border: 2px solid black;
    transform: rotate(25deg);
    top: 239px;
    right: 50%;
    margin-right: -115px;
    background: #00A1FF;
    z-index: -3;
}
.rightHand{
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background: white;
    border: 2px solid black;
    position: absolute;
    top: -6px;
    right: 50%;
    margin-right: -66px;
}
/* 口袋当然是不能少的 */
.pocket{
    width: 110px;
    height: 110px;
    background: white;
    border: 2px solid black;
    position: absolute;
    bottom: 28px;
    left: 50%;
    margin-left: -55px;
    border-radius: 50%;
    z-index: -1;
}
.pocketInside{
    width: 82px;
    height: 41px;
    border-radius: 0 0 41px 41px;
    background: black;
    position: absolute;
    top: 54px;
    left: 50%;
    margin-left: -41px;
}
.pocketInside:after{
    content: '';
    width: 76px;
    height: 38px;
    border-radius: 0 0 38px 38px;
    background: white;
    position: absolute;
    top: 1.5px;
    left: 50%;
    margin-left: -38px;
}
/* 记得帮他的红绳加上铃铛 */
.bell{
    width: 33px;
    height: 33px;
    border: 2px solid black;
    border-radius: 50%;
    background: #FBE405;
    position: absolute;
    top: 7px;
    left: 50%;
    margin-left: -17px;
}
.bell1{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    right: 1px;
    background: #FEFACD;
    box-shadow: -2px 3px 5px 5px #FDF49B;
}
.bell2{
    width: 27px;
    border: 1px solid black;
    position: absolute;
    top: 6px;
    left: 1px;
}
.bell3{
    width: 30px;
    border: 1px solid black;
    position: absolute;
    top: 10px;
    left: -1px;
}
.bell4{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: black;
    position: absolute;
    top: 14px;
    left: 50%;
    margin-left: -5px;
}
.bell5{
    height: 7px;
    width: 2px;
    background: black;
    position: absolute;
    left: 50%;
    margin-left: -1px;
    top: 23px;
}
/* 现在就只差腿脚啦 */
.leftLeg{
    width: 86px;
    height: 24px;
    position: absolute;
    top: 345px;
    left: 50%;
    margin-left: -86px;
    border: 2px solid black;
    border-radius: 10px;
    background: white;
}
.rightLeg{
    width: 86px;
    height: 24px;
    position: absolute;
    top: 345px;
    right: 50%;
    margin-right: -87px;
    border: 2px solid black;
    border-radius: 10px;
    background: white;
 }
.circle{
    width: 14px;
    height: 7px;
    border-radius: 7px 7px 0 0;
    border: 2px solid black;
    border-bottom: transparent;
    background: white;
    position: absolute;
    top: 107px;
    left: 50%;
    margin-left: -8px;
}
/* 最后把鼠标放到头上或手机点击屏幕
 * 让哆啦A梦的眼珠动起来吧 */
.head:hover .rightEyeball{
    animation: eyeballRoll 2s infinite linear;
}
.head:hover .leftEyeball{
    animation: eyeballRoll 2s infinite linear;
}
`
var speed = 50
function writeCode(text, fn) {
    let n = 0
    let code = document.querySelector('#code')
    setTimeout(function write() {
        n += 1
        code.innerHTML = Prism.highlight(text.substring(0,n), Prism.languages.css);
        styleTag.innerHTML = text.substring(0,n)
        code.scrollTop = code.scrollHeight
        if(n < text.length) {
            setTimeout(write, speed)
        }
    },speed)
}

$('.buttonWrapper').on('click','button', function (e) {
    let $button = $(e.currentTarget)
    let s = $button.attr('data-speed')
    switch(s){
        case 'slow':
            speed = 100
            break
        case 'middle':
            speed = 50
            break
        case 'fast':
            speed = 10
            break
    }
    $button.addClass('active')
        .siblings().removeClass('active')
})

writeCode(code)