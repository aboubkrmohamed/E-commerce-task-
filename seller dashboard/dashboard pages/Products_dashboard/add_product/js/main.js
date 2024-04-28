$(document).ready(function() {

    // Open modal
    $('#dashboardAction').click(function() {

      $('#dashboardAction').toggleClass('dashboardActionAction');
      $('#dashboard_controller').toggleClass('col-sm-2');
      $('#dashboard_controller').toggleClass('col-sm-1');
      $('#main_section').toggleClass('col-sm-11');
      $('.dashboard_links_item_span').toggle();
 
    });


  });
  