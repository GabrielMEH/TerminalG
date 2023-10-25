$(document).ready(function() {
    $("#usr_psw").hide();
    $("#error_msg").hide();
    $(document).on('keypress',function(e) {
            if(e.which == 13) {
                if($("#user").val() == "imperium")
                    val = true;
                else
                    val = false;
                ///////////////////
                if(val==true) {
                    $("#usr_psw").show();
                    $("#error_msg").hide();

                    if($("#password").val() == "password")
                        psw = true;
                    else
                        psw = false;
        
                    if(val == true && psw == true)
                    {
                        window.location.replace("home.html");
                    } else
                    {
                        if($("#password").val() != ""){
                            $("#usr_psw").hide();
                            $("#error_msg").show(); 
                            $("#password").val("");
                            $("#user").val("");
                        }
                    }
                } else 
                {
                    $("#usr_psw").hide();
                    $("#error_msg").show(); 
                }
            }
        
    });
});