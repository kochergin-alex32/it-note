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
  var tasks =[
    {id:'1',name:'task1',description:'some desk',image:'no-image.png'},
    {id:'2',name:'task2',description:'some desk',image:'no-image.png'},
    {id:'3',name:'task3',description:'some desk',image:'no-image.png'},
  ];
  // tasks.forEach(function(item){
  
  // });
  for(const item of tasks){
    renderTask(item);
  
  }
  

  document.querySelector('#tasks-wrapper').addEventListener('click', function(event){
    if (event.target.classList.contains('arrow-btn')) {
      const id = event.target.parentElement.dataset.id;
      const taskTitle = event.target.parentElement.querySelector('.task-title').textContent;
      renderTaskViewPage(id,taskTitle);
    }
  });
  // document.querySelector('#tasks-wrapper').addEventListener('click', showTask);
  
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
  // сохранение в ls 

  // получили из ls массив tasks

  // отрендерить задачу на экран с помощью ф rendertask(передаем  задач из ls)
  const title = form.children[0].value;
  const task = {name:title,description:'',image:'no-image.png'};
  renderTask(task);
  
 
}




// function showTask() {
//   if (event.target.classList.contains('arrow-btn')) {
//     const taskTitle = event.target.parentElement.querySelector('.task-title').textContent;
// // https://cdn.5bestthings.com/wp-content/uploads/2019/11/Business-Tasks-1024x630.jpg
//     var card = `
//           <div class="task-card card mx-auto" style="width: 21rem;">
//                 <div class="image-edit input-group mb-3">
//                   <img  src="img/no-image.png" class="task-image card-img-top">
//                   <label class="" for="inputGroupFile01"><i class="bi bi-pencil"></i></label>
//                   <input  type="file" class="d-none form-control file-image" id="inputGroupFile01">
//                 </div>
//                 <div class="card-body">
//                   <input type="text" class="task-title card-title form-control fst-italic" value="${taskTitle}" placeholder="Введите название задачи">
//                   <textarea class="task-desc card-text form-control mb-2" placeholder="Введите описание задачи"></textarea>
//                   <a href="#" class="btn btn-violet d-block py-2">сохранить</a>
//                 </div>
//             </div>
//     `;

//     document.querySelector('.task-view .container').insertAdjacentHTML('beforeend',card)

//   }
// }

const img = document.querySelector(".image-edit input").files[0].name;

document.querySelector('.task-image')?.setAttribute('src',`img/${img}`);















































