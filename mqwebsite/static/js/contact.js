$("#contact-footer-form").on("submit", function (event) {
      var default_subject = 'MQWebsite Email From: ';
      var subject = default_subject.concat(event.target.name.value);

      if(event.target.email.value.indexOf("yahoo") > -1) {
        $('#MessageNotSent2').removeClass('hidden');
        return false;
      } else {
        $('#MessageNotSent2').addClass('hidden');
      }

      // //In your client code: asynchronously send an email
      // Meteor.call('sendEmail',
      //   'mquettan@gmail.com', //to
      //   event.target.email.value, //from
      //   subject,//subject
      //   event.target.message.value,
      //   function(error) {
      //     if(error) {
      //       $('#MessageNotSent').removeClass('hidden');
      //       $('#MessageSent').addClass('hidden');
      //       console.log("An error occured! Error Number: " + error.error);
      //     } else {
      //       $('#MessageNotSent').addClass('hidden');
      //       $('#MessageSent').removeClass('hidden');
      //       $('input.btn').prop('disabled', true);
      //       console.log("Success!");
      //     }
      //   }); //content
      return false;
  });
