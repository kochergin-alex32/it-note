//вот эти закомментированые строчки это создание локального хранилища
// const users = [
//     {id:1, email:'user1@mail.ru',password:'123'},
//     {id:2, email:'user2@mail.ru',password:'321'},
// ];
// localStorage.setItem('users',JSON.stringify(users));



function renderLoginPage(){//функция отрисовки страницы авторизации
    document.body.innerHTML = "";
    if (isAuth()){
        renderTasksPage();
    } else {
        const loginPage = loginPageMarkup()
      
        document.body.insertAdjacentHTML('afterbegin',loginPage);

        document.querySelector('.form-login')?.addEventListener('submit', function(e){
            e.preventDefault();
           var email = document.querySelector('#email').value;
           var password = document.querySelector('#password').value;
           console.log(email,password);

           //проерка на то существуует в ls уже данные или нет, если существуют то берем парсим и сравниваем,а если нет
        if(localStorage.getItem('users')){
            const users = JSON.parse(localStorage.getItem('users'));
            //функция для сравнения пароле и почты вводимых с уже зарегестрироваными в ls также необходимо проверить пусто в ls или нет
          var user =  users.find(function(item){
            // if(email == item.email && password == item.password){

            //     return item;
            // }
            return email == item.email && password == item.password;
           });
           if(!user){
            document.querySelector('.login-error')?.remove();
            document.querySelector('.login .container').insertAdjacentHTML('afterbegin',`
            <div class="login-error alert alert-danger" role="alert">
            неверно введены логин или пароль!
                </div>`)
           } else {//эта часть рендерит страницу с тасками если пользователь авторизовался(вошел)
            localStorage.setItem('authUser',user.id);
            document.body.innerHTML = "";
            renderTasksPage();
           }
        } else {
            document.querySelector('.login-error')?.remove();
            document.querySelector('.login .container').insertAdjacentHTML('afterbegin',`
            <div class="login-error alert alert-danger" role="alert">
            пользователь с такими данными не зареган!
                </div>`)
        }
          
           
        });
        document.querySelector('.modal .form-register').addEventListener('submit',function(){
         const name = document.querySelector('.form-register #modal-name').value;
         const email = document.querySelector('.form-register #modal-email').value;
         const password = document.querySelector('.form-register #modal-password').value;
    
         registerUser(name, email, password);
         
        });
    }
    
    
  }
  
  function registerUser(name, email, password){
  //эта достаетмассив с юзерами или пустой создает еси их нет
     var users = JSON.parse(localStorage.getItem('users')) || [];
    if(users.length>0){
      //дальше идет сравнение пчты вводимой с уже существующими  и в случае совпадения выдается окночто пользователь с таким мылом уже есть, в противном сучае создает новый объект,пушит его в массив с пользователями и отправляет в LS
    const isUserInLs = users.find(function(user){
      return user.email == email;
    })
    if(isUserInLs){
      document.querySelector('.modal .modal-boby').insertAdjacentHTML('beforebegin', `<div class="alert alert-warning" role="alert">
      Пользователь с таким мылом уже есть!
     </div>`)
    }else{
      const id = users[users.length-1].id+1;
      const user = {id, email, password, name};
      users.push(user);
      localStorage.setItem('users',JSON.stringify(users));
      //недопилили увеомление о регистрации
      //есть какието траблы закрывается модальное окно при регистрации
    }
    }
  }

function loginPageMarkup(){
    return `<section  class="login">
        
    <div class="container">
        <div class="row text-center">
            <div class="col-12 logo">
                     <i class="bi bi-chat-dots logo"></i>
            </div>
             <div class="col-12 app-name"> it-note</div>
            
        </div>
        <div class="row  col-12 col-sm-6 mx-auto">
            <form class="form-login">
                <div class="mb-3">
                  
                  <input type="email" class="form-control" id="email" name="email" placeholder="введи-ка почту">
                  
                </div>
                <div class="mb-3">
                 
                  <input type="password" class="form-control" id="password" name="password" placeholder="введи-ка пароль">
                </div>
               
                <button type="submit" class=" w-100 btn ">войти</button>
                <button onclick="return false" data-bs-toggle="modal" data-bs-target="#registerModal"  class=" w-100 btn ">зарегаться</button>
              </form>
        </div>
    </div>
</section>



    <!-- Modal -->
    <div class="modal fade " id="registerModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" >регистрация пользователя</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form class="form-register needs-validation" novalidate>
                <div class="modal-body">

                <div class="mb-3">  
                <input type="text" class="form-control" id="modal-name" name="name" placeholder="введи-ка имя">
                
              </div>

                <div class="mb-3">
                  <input type="email" class="form-control" id="modal-email" name="email" placeholder="введи-ка почту">
                  
                </div>
                <div class="mb-3">
                 
                  <input type="password" class="form-control" id="modal-password" name="password" placeholder="введи-ка пароль">
                </div>
               </div>

                <div class="modal-footer">
                   <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->

                   <button id="register" type="submit" class=" w-100 btn ">зарегаться</button>
                   
                </div>
                </form>
            </div>
        </div>
    </div>
`;

}
function isAuth(){//функция для авторизации
  if(localStorage.getItem('authUser')){
   return true;
  } else {
    return false;
    }
  }

    