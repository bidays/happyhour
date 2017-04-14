$(document).foundation();

  window.onload=function() {horloge('div_horloge');};
    function horloge(el) {
      if(typeof el=="string") { el = document.getElementById(el); }
      function actualiser() {
        var date = new Date();
        var str = date.getHours();
        str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
        str += ':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
        el.innerHTML = str;
      }
      actualiser();
      setInterval(actualiser,1000);
  }

$(function() {
    var d = new Date();
    var currentHour = d.getHours();
    var counter = 0;
    $(".bar_fiche").each(function() {
      var fromHour = $(this).data('from');
      var toHour = $(this).data('to');
      var from = fromHour.replace("h", ".");
      var to = toHour.replace("h", ".");
      if (currentHour > from && currentHour < to) {counter++}
      else if (currentHour == from) {counter++}
      else{
        $(this).addClass('ferme');
      }
    });
    if (counter <= 0){
      $("#bars_message").show();
    }
});
