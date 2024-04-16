// $(document).ready(function() {
 

            
//     $('.Join_suppliers_link').click(function() {

//         $('.Join_suppliers_section').toggleClass('action');
//         $('.Trade_Assurance_section').hide()

//        $('#search').hide()


       

      

     

//     });



    
// });
 

 
 
// $('.Trade_Assurance_link').click(function() {

//     $('.Trade_Assurance_section').toggleClass('action');
//     $('.Join_suppliers_section').hide()
//    $('#search').hide()



 

// });


$(document).ready(function() {

$('.Join_suppliers_link').click(function(){
    $('.Join_suppliers_section').toggle();
    $('#search').toggle()
})


$('.Trade_Assurance_link').click(function(){
    $('.Trade_Assurance_section').toggle();
    $('#search').hide()
})

$('.Customer_center_link').click(function(){
    $('.Customer_center_section').toggle();
    $('#search').hide()
})

$('.solutions_link').click(function(){
    $('.solutions_section').toggle();
    $('#search').hide()
})

$('.get_app_link').click(function(){
    $('.get_app_section').toggle();
    $('#search').hide()
})

})