var bad = [];
var good = [];



$(document).ready(function(){
  $("form#fortune-teller").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=good-luck]:checked").each(function(){
      var goodLuck= $(this).val();
      good.push(goodLuck);
      console.log(good);
    });
    $("input:checkbox[name=bad-luck]:checked").each(function(){
      var badLuck= $(this).val();
      bad.push(badLuck);
    });
    if (bad.length>good.length){
      $(".showFortune").text("1Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
    }
    else if (good.length>bad.length){
      $(".showFortune").text("2Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
    }
    else {
      $(".showFortune").text ("3Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
    }

  });
});
