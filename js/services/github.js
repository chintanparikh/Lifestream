var get_events = function (user) {
  var url = 'https://api.github.com/users/' + user + '/events';

  $.ajax({
      url: url,
      dataType: 'jsonp',

      success: function(results) {
        $.each(results.data, function(key, gist) {
          console.log(gist)
        });
      }
  });
};