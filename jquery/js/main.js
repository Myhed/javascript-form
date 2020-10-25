$(document).ready(function(){
   const form = $('#form');
   const input = $('input')
   form.submit((e) => {
        console.log(input.eq(0).val())
        $.ajax({
            url:'http://localhost:8080/users',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: {name: 'toto', email: 'toto@gmail.com'},
            processData: false,
            complete: function(){
                console.log('request completed')
            }
        })
        e.preventDefault()
   })
});