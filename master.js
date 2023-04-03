// let qustions = document.querySelectorAll(".qustions .qustion");
// qustions.onclick = function(e){
//     e.stopPropagation()
// }
// qustions.forEach(qustio =>{
    
//     qustio.addEventListener("click",(e)=>{
        
//         e.target.document.querySelectorAll(".qustions .qustion").forEach(e=>{
//             e.parentElement.parentElement.classList.remove("active")
//         })
//         e.target.parentElement.parentElement.classList.add("active")
//     })
// })



let titleOpen = document.querySelectorAll(".qustion .head ");
titleOpen.forEach(e=>{
    e.addEventListener("click",(er)=>{
        er.stopPropagation()
        er.target.parentElement.parentElement.classList.toggle("active")
    })
 
})