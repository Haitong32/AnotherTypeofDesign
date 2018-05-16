$(document).ready(function(){
     $('body').jGravity({
          target: 'everything',
          // ignoreClass: 'ignoreMe',
          weight: 20,
          depth: 10,
          // drag: true
     });
     var randPercent = Math.random() * 100;
    var randX = Math.random() * 100;
    var randY = Math.random() * 100;
    var randX2 = Math.random() * 100;
    var randY2 = Math.random() * 100;
    var randX3 = Math.random() * 100;
    var randY3 = Math.random() * 100;
    $('#ling2').click(function(){
      $('#ling2').css('left', randX + "%");
      $('#ling2').css('top', randY + "%");
    });
    $('#yi').click(function(){
      $('#yi').css('left', randX2 + "%");
      $('#yi').css('top', randY2 + "%");
    });

    $('#zhong').click(function(){
      $('#zhong').css('left', randX3 + "%");
      $('#zhong').css('top', randY3 + "%");
    });



  });
