
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyhnAWiFIUu54ENVzoRk1fai5rADEhdVvTWkwO6lljREzAtQEid4KM67unIL454KGwo3A/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("bottom-heading")


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

  function msg_show()
  {
    msg.innerHTML="Thank You For Subscribing!";
    setTimeout(function(){
        msg.innerHTML="";
    },5000)


  }

 
