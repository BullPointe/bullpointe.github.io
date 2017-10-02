
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });

  $("a[data-toggle=popover]").popover().click(function(e) {
        e.preventDefault();
});
