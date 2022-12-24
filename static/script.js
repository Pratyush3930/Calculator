let string = "";
let buttons = document.querySelectorAll('.btn');
let x = document.getElementById('num');
let message = document.getElementById('p01');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try{
                string = eval(string);
                document.querySelector('.num').value = string;
            }
            catch(err){
                string = "Error";
                document.getElementById('num').value = string;
                message.innerHTML = err;
            }

        }
        else if (e.target.innerHTML == 'AC') {
            string='';
            document.querySelector('.num').value = string;


        }
        else {
            console.log(e.target);
         
            string = string + e.target.innerHTML;
            document.querySelector('.num').value = string;
            try{}
            catch(err){
                message.innerHTML = err;
            }
        }
    })

})
