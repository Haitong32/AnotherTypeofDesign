$(document).ready(function(){
     // $('#dot').click(function(){
     // $("#dot").hide();
     $('body').jGravity({
          target: 'everything',
          // ignoreClass: 'ignoreMe',
          weight: 20,
          depth: 10,
          // drag: true
     });
     $("text").draggable();
  });
// });
