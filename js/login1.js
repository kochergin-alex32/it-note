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
           }else{
            localStorage.setItem('authUser',user.id)
           }
            console.log(user)
        });
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
                <button type="submit" class=" w-100 btn ">зарегаться</button>
              </form>
        </div>
    </div>
</section>
`;
}
function isAuth(){//функция для авторизации
  

    return false;
}