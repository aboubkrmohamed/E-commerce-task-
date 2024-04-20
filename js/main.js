
$(document).ready(function() {
 

            
    $('.product_link').click(function() {

        $('.product_section').addClass('action');
        $('.product_link').addClass('action');
        

        $('.Manufacturers_section').removeClass('action');
        $('.Manufacturers_link').removeClass('action');

    });



            
    $('.Manufacturers_link').click(function() {

        $('.product_section').removeClass('action');
        $('.product_link').removeClass('action');

        $('.Manufacturers_section').addClass('action');
        $('.Manufacturers_link').addClass('action');

    });


           
    $('.Most_popular').click(function() {

        $('.best_seller').removeClass('active_Highest_rated_products_link');
        $('.Best_rated').removeClass('active_Highest_rated_products_link');
        $('.Most_popular').addClass('active_Highest_rated_products_link');

        $('.best_seller_section').removeClass('show');
        $('.Best_rated_section').removeClass('show');
        $('.Most_popular_section').addClass('show');

        
    });


               
    $('.best_seller').click(function() {

        $('.best_seller').addClass('active_Highest_rated_products_link');
        $('.Most_popular').removeClass('active_Highest_rated_products_link');
        $('.Best_rated').removeClass('active_Highest_rated_products_link');

        $('.Most_popular_section').removeClass('show');
        $('.Best_rated_section').removeClass('show');
        $('.best_seller_section').addClass('show');

        
    });


    $('.Best_rated').click(function() {

        $('.best_seller').removeClass('active_Highest_rated_products_link');
        $('.Most_popular').removeClass('active_Highest_rated_products_link');
        $('.Best_rated').addClass('active_Highest_rated_products_link');

        $('.Most_popular_section').removeClass('show');
        $('.best_seller_section').removeClass('show');
        $('.Best_rated_section').addClass('show');

        
    });


    
});
 

 
 