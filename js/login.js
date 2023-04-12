// const users = [ 
//     {id:1, email:'user1@mail.ru', password:'123'},
//     {id:2, email:'user2@mail.ru', password:'321'},
// ]
// localStorage.setItem('users',JSON.stringify(users))

function renderLoginPage(){
    // document.body.innerHTML = '';
        
};

    if(isAuth()){
        // редирект на страницу задач
        renderTasksPage()

    }else{
    const loginPage = loginPageMarkup()
   
    document.body.insertAdjacentHTML('afterbegin',loginPage);
    }


function isAuth(){
    document.querySelector('.form-login')?.addEventListener('submit',function(e){
        e.preventDefault();
        var email = document.querySelector('#email').value;
        var password = document.querySelector('#password').value;
        const users = JSON.parse(localStorage.getItem('users'));

        
    })
    return false;
}
function loginPageMarkup(){
    return  `<section class="login">
    <div class="container">
        <div class="row text-center">
            <div class="col-12">
                     <i class="bi bi-chat-dots logo"></i>
            </div>
             <div class="col-12 app-name"> it-note</div>
            
        </div>
        <div class="row col-6 mx-auto">
            <form class="form-login">
                <div class="mb-3">
                 
                  <input type="email" class="form-control" id="email" name="email" placeholder="введите почту">
                  
                </div>
                <div class="mb-3">
                 
                  <input type="password" class="form-control" id="password" name="pasword" placeholder="введитте пароль">
                </div>
               
                <button type="submit" class=" w-100 btn ">войти</button>
                <button type="submit" class=" w-100 btn ">зарегаться</button>
              </form>
        </div>
    </div>
    </section>
    `
}
