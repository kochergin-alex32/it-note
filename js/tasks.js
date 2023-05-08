function renderTasksPage(){
  const userId = localStorage.getItem('authUser');
  const authUser = JSON.parse(localStorage.getItem('users')).find(function(item){
    return item.id == userId;
  });

  var tasksPage = `  <section class="nav">
  <div class=" container">
      <form id="task-form" class="d-flex">
          <input id="task-data" type="text" class="form-control me-1" placeholder="Введите название задачи">
          <input type="submit" class="btn btn-violet" value="Добавить">

         
           <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <i class="navbar-toggler-icon bi bi-person-circle fs-3 pt-2 ps-3"></i>
      
         </button>

         
          
          <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">${authUser.name}</h5>
        <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">редактировать профиль</a>
          </li>
         
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3 " role="search">
          <input class=" d-inline-block w-75 form-control me-2" type="search" placeholder="поиск задач" aria-label="Search">
          <button class="btn btn-violet px-2 py-1" type="submit">найти</button>
        </form>
        <button id="logout" class="btn btn-danger w-100 px-2 py-1 mt-3" ">выход</button>
      </div>
    </div>
  </div>



      </form>
  </div>
</section>
<section class="tasks">
  <div class="container">
      <h3 class="display-6">Задачи</h3>
      <hr>
      <ul id="tasks-wrapper" class="list-group list-group-flush">
          <!-- <li class="d-flex justify-content-between list-group-item rounded border-0 shadow p-3 mb-2 bg-body-tertiary">
              <span class="task-title fw-bold">An item</span> 
              <i class="bi bi-chevron-right"></i>
          </li>
          <li class="list-group-item rounded border-0 shadow p-3 mb-2 bg-body-tertiary fw-bold">A second item <i class="bi bi-chevron-right"></i>
          </li>
          <li class="list-group-item rounded border-0 shadow p-3 mb-2 bg-body-tertiary fw-bold">A third item <i class="bi bi-chevron-right"></i> </li>-->
      </ul>
      <hr>
      <button id="clear-all" class="btn btn-danger w-100"> очистить список задач</button>
  </div>
</section>
`;
document.body.insertAdjacentHTML('afterbegin',tasksPage);

document.querySelector('#logout').addEventListener('click',function(){
localStorage.removeItem('authUser');
renderLoginPage()
})

document.querySelector('#clear-all').addEventListener('click', function(){
  if(confirm('вы уверены?')){
    localStorage.removeItem('tasks');
    document.body.innerHTML = '';
    renderTasksPage()
    
  }
})

document.querySelector('#task-form input[type="submit"]').addEventListener('click', function(event) {
  event.preventDefault();
  if(event.target.matches('#task-form input[type="submit"]')){
  if (document.querySelector('#task-data').value !== '') {
    // сохраняем в ls, дописали  k this. parentElement потому что зис это кнопка здесь а событие нужно на форму на родителя
    addTask(this.parentElement);
    document.querySelector('#task-data').value = "";
  } else {
    alert('Введено пусто значение');
  }
}
});


  // получить все задачи из ls
  
  var tasks = JSON.parse(localStorage.getItem('tasks')) || null;
  if(tasks){
    for(const item of tasks){
      renderTask(item);
     }
    }
  

  document.querySelector('#tasks-wrapper').addEventListener('click', function(event){
    if (event.target.classList.contains('arrow-btn')) {
      const id = event.target.parentElement.dataset.id;
      //функцция которая достаает из ls таски и затем отисовывает их
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      const task = tasks.find(function(item){
        return item.id == id;
      })
      renderTaskViewPage(task);
    }
  });
  
  
};


function renderTask(task){
  // отрендерить задачи
  const ul = document.querySelector('#tasks-wrapper');
  const li = `
  <li data-id="${task.id}" class="task d-flex justify-content-between list-group-item rounded border-0 shadow p-3 mb-2 bg-body-tertiary">
    <span class="task-title fw-bold">${task.name}</span> 
    <i class="arrow-btn bi bi-chevron-right"></i>
  </li>
`
ul.insertAdjacentHTML('beforeend',li);

}

function addTask(form) {
  const title = form.children[0].value;
  var task = {name:title,description:'',image:'no-image.png'};
  // сохранение в ls первый вариант
  // if (localStorage.getItem('tasks')){
  //   var tasks = JSON.parse(localStorage.getItem('tasks'));
  //   tasks.push(task);
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // } else {
  //   var tasks = [];
  //   tasks.push(task);
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }
  //второй вариант
    // var tasks = [];
    // if (localStorage.getItem('tasks')){
    //   tasks = JSON.parse(localStorage.getItem('tasks'));
    // }
    //     tasks.push(task);
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
        //либо третий варик

        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        //вот этот if меняет id в записываемых тасках
        if(tasks.length > 0) {
         task.id = tasks[tasks.length-1].id +1
        } else {
          task.id = 1;
        }
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));


  
 
  renderTask(task);
  
 
}













































