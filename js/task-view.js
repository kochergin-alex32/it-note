function renderTaskViewPage(id,taskTitle){
document.body.innerHTML = '';
const taskViewPage = `<section class="task-view">
<div class="container">
    
</div>
</section>`
document.body.insertAdjacentHTML('afterbegin',taskViewPage)
showTask(id,taskTitle) ;

document.querySelector('.task-view').addEventListener('change',function(event) {
    if (event.target.classList.contains('file-image')) {
      
      const img = document.querySelector(".image-edit input").files[0].name;
       console.log(img);
      document.querySelector('.task-image').src = `img/${img}`;
      // document.querySelector('.task-image')?.setAttribute('src',img);
      
    }
  });

};

function showTask(id,taskTitle) {
   
      var card = `
      <div class="arrow">
      <a href=""id="btn-back"> <i class="bi bi-arrow-90deg-left" data-toggle="tooltip" title="вернуться к задачам"></i></a></div>
            <div data-id="${id}" class="task-card card mx-auto" style="width: 21rem;">
                  <div class="image-edit input-group mb-3">
                    <img  src="img/no-image.png" class="task-image card-img-top">
                    <label class="" for="inputGroupFile01"><i class="bi bi-pencil"></i></label>
                    <input  type="file" class="d-none form-control file-image" id="inputGroupFile01">
                  </div>
                  <div class="card-body">
                    <input type="text" class="task-title card-title form-control fst-italic" value="${taskTitle}" placeholder="Введите название задачи">
                    <textarea class="task-desc card-text form-control mb-2" placeholder="Введите описание задачи"></textarea>
                    <a href="#" class="btn btn-violet d-block py-2">сохранить</a>
                  </div>
              </div>
      `;
  
      document.querySelector('.task-view .container').insertAdjacentHTML('beforeend',card)
      document.querySelector('#btn-back').addEventListener('click',function(e) {
        e.preventDefault();
        document.body.innerHTML = '';
        renderTasksPage();
      });
       
  
    }
  

function addTask(form) {
    // сохранение в ls 
  
    // получили из ls массив tasks
  
    // отрендерить задачу на экран с помощью ф rendertask(передаем  задач из ls)
    const title = form.children[0].value;
    const task = {name:title,description:'',image:'no-image.png'};
    renderTask(task);
    
   
  }






// из первой функции в контейере стояло...
  //  <div class="task-card card mx-auto" style="width: 21rem;">
    //     <div class="image-edit input-group mb-3">
    //       <img  src="img/no-image.png" class="task-image card-img-top">
    //       <label class="" for="inputGroupFile01"><i class="bi bi-pencil"></i></label>
    //       <input  type="file" class="d-none form-control" id="inputGroupFile01">
    //     </div>
    //     <div class="card-body">
    //       <input type="text" class="task-title card-title form-control fst-italic" value="${taskTitle}" placeholder="Введите название задачи">
    //       <textarea class="task-desc card-text form-control" placeholder="Введите описание задачи"></textarea>
    //       <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    // </div> 

