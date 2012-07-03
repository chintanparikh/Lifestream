var get_gists = function (user) {
  var url = 'https://api.github.com/users/' + user + '/gists';

  $.ajax({
      url: url,
      dataType: 'jsonp',

      success: function(data) {
      console.log(data);
    }
  });
};