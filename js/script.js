//кнопка бургер
let menuContainer = document.querySelector('.menu-container')
let menu = document.querySelector('.menu')
let menuItem = document.querySelectorAll('.menu-item')

let burger = document.querySelector('.burger')
burger.addEventListener('click', ()=>{
  menuContainer.classList.toggle('showContainer')
  menu.classList.add('newNav')
  for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].style.fontSize = '25px'
    menuItem[i].style.marginBottom = '10px'
  }
})


//кнопка-ссылка 'еще'
let hiddenItem = document.querySelectorAll('.hidden')

let elseLink = document.querySelector('.else-link')
elseLink.addEventListener('click', (ev)=>{
  ev.preventDefault()
  for (var i = 0; i < hiddenItem.length; i++) {
    hiddenItem[i].style.display = 'flex'
  }
elseLink.style.display = 'none'
})


//кнопка 'подобрать' и 'примерить' и кнопка 'Отправить' в попапе
let btnOrder = document.querySelector('.pusets__info--btn')
let btnTryOn = document.querySelectorAll('.goods-item-order--btn')
let popupBG = document.querySelector('.popup-bg-deactive')
let popupWindow = document.querySelector('.popup-window')
let buttonSend = document.querySelector('.popup-call__button')
let body = document.querySelector('body')

btnOrder.addEventListener('click', ()=> {
    popupBG.classList.add('popup-bg')
    body.style.overflowY = 'hidden'
  }
)

for (var i = 0; i < btnTryOn.length; i++) {
  btnTryOn[i].addEventListener('click', ()=> {
      popupBG.classList.add('popup-bg')
      body.style.overflowY = 'hidden'
    }
  )
}

popupBG.addEventListener('click', (e)=> {
  if (e.target.className == 'popup-window' || e.target.className == 'popup-window__input' || e.target.className == 'popup-window__label') {
    return
  }
  popupBG.classList.remove('popup-bg')
  body.style.overflowY = 'auto'
  }
)

//кнопка 'Отправить' в попапе


buttonSend.addEventListener('click', (ev)=> {
    ev.preventDefault()
    popupBG.classList.remove('popup-bg')
    body.style.overflowY = 'auto'
  }
)
