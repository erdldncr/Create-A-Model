document.querySelector('.open').addEventListener('click',function(){
    document.querySelector('.modal-container').classList.remove('hidden')
})
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.modal-container').classList.add('hidden')
})