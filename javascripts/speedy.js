// Generated by CoffeeScript 1.6.3
$(function() {
  if ($(".speedy-filter").length) {
    return $(".speedy-filter").speedy();
  }
});

$.fn.speedy = function(result_selector) {
  var $input, search;
  $input = $(this);
  window.speedy_keyword = "";
  if (result_selector == null) {
    result_selector = ".result";
  }
  search = function(keyword) {
    var reg;
    if (window.speedy_keyword !== keyword) {
      window.speedy_keyword = keyword;
      if (keyword.length) {
        reg = new RegExp($.trim(keyword), "gi");
        $(result_selector).hide();
        return $(result_selector).each(function(i, ele) {
          if (ele.innerText.match(reg)) {
            return $(this).show();
          }
        });
      } else {
        return $(result_selector).show();
      }
    }
  };
  $input.on("search keyup", function() {
    search($(this).val());
    return location.hash = $(this).val();
  });
  $(".group").click(function() {
    return search($(this).attr("href").substr(1));
  });
  if (location.hash.length) {
    search($input.val(location.hash.substr(1)).val());
  }
  return $(".speedy-remover").click(function() {
    $input.val("");
    return $(result_selector).show();
  });
};
