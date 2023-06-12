//пытаюсь из tasks.js меренести сюда фильтр, со 125 по139 строку в tasks.js  и что то не допонимаю видимо ,не получается взять кнопкуи сделать событие клик
function FT(tasksPage){
    document.querySelector('#filter').addEventListener('click',function(e){
        e.preventDefault() 
        var filter = document.querySelector('#inpFilter').value.trim()
    //   console.log(filter);
      var filterTasc = document.querySelectorAll('.task');
        filterTasc.forEach(function(elem){
            //  console.log(elem.innerText);
                if(elem.innerText.search(filter)== -1){
                    // console.log(elem);
                    elem.classList.add('hide')
                    var c = document.querySelector('#offcanvasDarkNavbar')
                    console.log(c);
                    c.classList.remove('show')
                   
                    // c.classList.add('hide')
                    // document.body.innerHTML = '';
                    // renderTasksPage(elem)

                    // var close= document.querySelector('.btn-close')
                    // close.classList.add('onload')
                   
                    // console.log(close);
                  }
         })

    })
}

    

 // const tasks = JSON.parse(localStorage.getItem('tasks'));
// document.querySelector('#filter').addEventListener('click', function(e){
//     e.preventDefault()
//   var filter = document.querySelector('#inpFilter').value.trim()
//   console.log(filter);
//   var filterTasc = document.querySelectorAll('.task');
  
//   filterTasc.forEach(function(elem){
//   console.log(elem.innerText);
//     if(elem.innerText.search(filter)== -1){
//       console.log(elem);
//       elem.classList.add('hide')
//       }
//   })
    
//   })
