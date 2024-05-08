$(document).ready(function() {

    // odrers modal
    $('.nav_control_link').click(function() {

      $('.nav_control_link').removeClass('nav_control_link_active');
        
      // Add nav_control_link_active class to the clicked section
      $(this).addClass('nav_control_link_active');
       
    });
 


    // Product_condition_item_active
 
    $('.Product_condition_item').click(function() {

      $('.Product_condition_item').removeClass('Product_condition_item_active');
        
      // Add Product_condition_item_active class to the clicked section
      $(this).addClass('Product_condition_item_active');
       
    });
 

    // nav controls 

    // order link 

    $('#orderLink').click(function() {

      $('.all').hide();

      $('.order_section').show();

    });
 

    // return link 

    $('#returnsLinkk').click(function() {

      $('.all').hide();

      $('.returns_section').show();

    });
    
    
        // Abandoned Basket Link
        $('#AbandonedBasketLink').click(function() {

          $('.all').hide();
    
          $('.Abandoned_basket').show();
    
        });
        
        

  });
  