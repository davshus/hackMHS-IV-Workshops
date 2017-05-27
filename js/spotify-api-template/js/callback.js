function addCard(title, author) {
  $('#body-container').append('\
  <div class=\'card\'>\
    <span class=\'track-title\'>' + title + '</span><br />\
    <span class=\'track-author\'>' + author + '</span>\
  </div>\
  ')
}
