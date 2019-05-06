$(document).ready(function() {

    function explode(){
        $("#block-answer").addClass("").removeClass("show-block-valid show-block-error");
    }

    var timeoutHandle = window.setTimeout(function(){explode();},4000);

    $("#contact-form [type='submit']").click(function(e) {
        e.preventDefault();

        $('#valid-form').html('Sending <i class="fa fa-spinner fa-pulse fa-fw"></i>'); // Message displayed in the submit button during the sending

        $(".block-message").addClass("").removeClass("show-block-valid show-block-error");
        
        // Get input field values of the contact form
        var user_checking   = $('input[name=checking]').val(); // Anti-spam field

        var user_name       = $('input[name=name]').val();
        var user_email      = $('input[name=email-address]').val();
        var user_subject    = $('input[name=subject]').val();
        var user_phone      = $('input[name=phone]').val();
        var user_message    = $('textarea[name=message]').val();
       
        // Datadata to be sent to server
        post_data = {'userChecking':user_checking, 'userName':user_name, 'userEmail':user_email, 'userSubject':user_subject, 'userPhone':user_phone, 'userMessage':user_message};
       
        // Ajax post data to server
        $.post('php/contact-me.php', post_data, function(response){  
           
            // Load json data from server and output message    
            if(response.type == 'error') {

                output = '<div class="error-message"><p class="notify-valid">'+response.text+'</p></div>';

                $('#valid-form').html('Send my Message'); // Message displayed in the submit button if an error has occured

                $('#block-answer').addClass('show-block-error').removeClass('show-block-valid');

                window.clearTimeout(timeoutHandle);
                timeoutHandle = window.setTimeout(function(){explode();},4000);
                
            } else {
           
                output = '<div class="success-message"><p class="notify-valid">'+response.text+'</p></div>';
               
                // After, all the fields are reseted
                $('#contact-form input').val('');
                $('#contact-form textarea').val('');
                $('#contact-form select').val('placeholder').addClass('no-selection');
                
                $('#valid-form').html('Sent!'); // Message displayed in the submit button when the submission is successfull

                $('#block-answer').addClass('show-block-valid').removeClass('show-block-error');

                window.clearTimeout(timeoutHandle);
                timeoutHandle = window.setTimeout(function(){explode();},4000);
            }
           
            $("#block-answer").html(output);

        }, 'json');

    });
   
    // Reset and hide all messages on .keyup()
    $("#contact-form input, #contact-form textarea").keyup(function() {
        $("#answer").fadeOut();
    });

    // Accept only figure from 0 to 9 and + ( ) in the phone field
    $("#contact-form #phone").keyup(function() {
        $("#phone").val(this.value.match(/[0-9 + ( )]*/));
    });
   
});