let ul = document.querySelector('ul');
let li = Array.from(ul.children);
let select = document.querySelector('.selected__opt_result')
let option_container = document.querySelector('.option_container');


let fa_down = document.querySelector('.fa-chevron-down');
let fa_up = document.querySelector('.fa-chevron-up')

li.forEach((item) =>{
   item.addEventListener('click', (e)=>{
         let select_opt = document.querySelector('.selected__default');
          select_opt.innerHTML = item.innerHTML;
         let dot = item.children[1].classList.add('active')
     

         option_container.classList.add('option_hidden');
         let opt__close = option_container.classList.remove('open');

      fa_down.classList.remove('fa_down')
      fa_up.style.opacity = 0;
   })
 
})


select.addEventListener('click', (e) =>{
      option_container.classList.add('open')
      option_container.classList.remove('option_hidden');

      fa_down.classList.add('fa_down')
      fa_up.style.opacity = 1;
})