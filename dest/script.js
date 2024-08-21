let toastalerts = document.querySelector('.toast_alerts')
let btns_div = document.querySelector('.notify_buttons')

let success = '<i class="fa-solid fa-circle-check text-2xl text-green-600 p-2"></i> Successfully Completed'
let error = '<i class="fa-solid fa-circle-xmark text-2xl text-red-600 p-2"></i> Something went wrong !'
let invalid = '<i class="fa-solid fa-circle-exclamation text-2xl text-yellow-700 p-2"></i> Invalid. Try Again !'

function showToast(msg){
    
    let notif = document.createElement("div")
    notif.innerHTML= msg
    notif.classList.add("notif","bg-slate-300","p-3","mt-2")
    toastalerts.appendChild(notif)
    
    if(msg==success){
        notif.classList.add("toast_success")
    }
    if(msg == error){
        notif.classList.add("toast_error")
    }
    if(msg==invalid){
        notif.classList.add("toast_invalid")
    }

    setTimeout(()=>{
        notif.remove()
    },6000)
  
}

console.log("All good")