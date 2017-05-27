const params = window.location.hash.substring(1);
const token = $.deparam(params).access_token;
$.ajax({
  url: 'https://api.spotify.com/v1/me/',
  type: 'GET',
  data: {
    format: 'json'
  },
  headers: {
    'Authorization': 'Bearer ' + token
  },
  success: function (data) {
    $('#header-container').append('<br /><br /><h1 id=\'welcome\'>Hello, ' + (!data.display_name ? data.id : data.display_name) + '!</h1>');
  },
  error: function() {
    console.error('An error occurred in getting user information.');
  }
});
$.ajax({
  url: 'https://api.spotify.com/v1/me/tracks',
  type: 'get',
  data: {
    format: 'json'
  },
  headers: {
    'Authorization': 'Bearer ' + token
  },
  success: function(data) {
    data.items.forEach((val, ind, arr) => addCard(val.track.name, val.track.artists.map(x => x.name).join(', ')));
  },
  error: function() {
    console.error('An error occurred in getting user tracklist.')
  }
})
function addCard(title, author) {
  $('#body-container').append('\
  <div class=\'card\'>\
    <span class=\'track-title\'>' + title + '</span><br />\
    <span class=\'track-author\'>' + author + '</span>\
  </div>\
  ')
}
