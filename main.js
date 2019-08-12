$('#clickMe').on('click', function (e) {
  $popover = $('#popover')
  if ($popover[0].style.display !== 'none') {
    $popover.hide()
  }
  else {
    $popover.show()
    setTimeout(function () {
      $(document).one('click', function () {
        $popover.hide()
      })
    }, 0)
  }

})

$('#wrapper').on('click', function (e) {
  e.stopPropagation()
})