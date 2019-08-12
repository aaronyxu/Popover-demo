$('#clickMe').on('click', function (e) {
  $popover = $('#popover')
  if ($popover[0].style.display !== 'block') {
    $popover.show()
    setTimeout(function () {
      $(document).one('click', function () {
        $popover.hide()
      })
    }, 0)
  }
  else {
    $popover.hide()
  }

})

$('#wrapper').on('click', function (e) {
  e.stopPropagation()
})
