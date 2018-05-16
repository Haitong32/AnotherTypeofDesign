$(document).ready(function(){
     $('body').jGravity({
          target: 'everything',
          // ignoreClass: 'ignoreMe',
          weight: 20,
          depth: 10,
          // drag: true
     });
     var div = document.getElementById('ling2');
    div.addEventListener('touchmove', function(event) {
    event.preventDefault();//阻止其他事件
    // 如果这个元素的位置内只有一个手指的话
    if (event.targetTouches.length == 1) {
        var touch = event.targetTouches[0];  // 把元素放在手指所在的位置
        div.style.left = touch.pageX + 'px';
        div.style.top = touch.pageY + 'px';
    }
}, false);
  });
