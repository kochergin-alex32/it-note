function renderTasksPage(){
  var tasksPage = `  <section class="nav">
  <div class="container">
      <form id="task-form" class="d-flex">
          <input id="task-data" type="text" class="form-control me-1" placeholder="Введите название задачи">
          <input type="submit" class="btn btn-violet" value="Добавить">
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
  </div>
</section>
`;
document.body.insertAdjacentHTML('afterbegin',tasksPage);

document.querySelector('#task-form').addEventListener('submit', function(event) {
  event.preventDefault();
  if (document.querySelector('#task-data').value !== '') {
    // сохраняем в ls
    addTask(this);
    document.querySelector('#task-data').value = "";
  } else {
    alert('Введено пусто значение');
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


  // получили из ls массив tasks

  // отрендерить задачу на экран с помощью ф rendertask(передаем  задач из ls)
 
  renderTask(task);
  
 
}





// const img = document.querySelector(".image-edit input").files[0].name;

// document.querySelector('.task-image')?.setAttribute('src',`img/${img}`);














































