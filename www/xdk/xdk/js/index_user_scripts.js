/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
 
        /* button  #btn_next1 */
    $(document).on("click", "#btn_next1", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_2"); 
         return false;
    });
    
        /* button  #btn_next2 */
    $(document).on("click", "#btn_next2", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_3"); 
         return false;
    });
    
        /* button  #btn_next3 */
    $(document).on("click", "#btn_next3", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_4"); 
         return false;
    });
    
        /* button  #btn_next4 */
    $(document).on("click", "#btn_next4", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_5"); 
         return false;
    });
    
        /* button  #btn_next5 */
    $(document).on("click", "#btn_next5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_6"); 
         return false;
    });
    
        /* button  #btn_next6 */
    $(document).on("click", "#btn_next6", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_71_43"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
