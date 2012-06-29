var get_gists = function (user) {
  url = 'https://api.github.com/users/' + user + '/gists';

  $.getJSON( url, function(data) {
    console.log(data);
  });

  console.log(url);
};