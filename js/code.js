function documentReady () {
  // Cheating
  document.getElementsByClassName('print')[0].addEventListener('click' , function (e) {
    e.preventDefault();
    window.print();
  });
}

if (document.addEventListener)
  document.addEventListener('DOMContentLoaded', documentReady);
else
  document.attachEvent('onreadystatechange', function () {
    if (document.readyState === 'interactive')
      documentReady();
  });