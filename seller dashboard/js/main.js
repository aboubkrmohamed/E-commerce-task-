$(document).ready(function() {

    // Open modal
    $('#dashboardAction').click(function() {

      $('#dashboardAction').toggleClass('dashboardActionAction');
      $('#dashboard_controller').toggleClass('col-md-2');
      $('#dashboard_controller').toggleClass('col-md-1');
      $('#main_section').toggleClass('col-md-11');
      $('.dashboard_links_item_span').toggle();
 
    });


  });
  