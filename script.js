const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {

        // switch(e.target.id){
        //     case 'red':
        //     body.style.backgroundColor = 'red';
        //     break;
        //     case 'grey':
        //     body.style.backgroundColor = 'grey';
        //     break;
        //     case 'green':
        //     body.style.backgroundColor = 'green';
        //     break;
        //     case 'yellow':
        //     body.style.backgroundColor = 'yellow';
        //     break;
        //     case 'skyblue':
        //     body.style.backgroundColor = 'skyblue';
        //     break;
        //     case 'orange':
        //     body.style.backgroundColor = 'orange';
        //     break;
        // }

        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'grey'){
            body.style.backgroundColor =  e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor =  e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor =  e.target.id;
        }
        if(e.target.id === 'skyblue'){
            body.style.backgroundColor =  e.target.id;
        }

    })
})