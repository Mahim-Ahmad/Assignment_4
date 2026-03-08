const cards = document.querySelectorAll(".job-card")

const interviewCountEl =document.getElementById("interview-count")

const rejectedCountEl =document.getElementById("rejected-count")

const totalCountEl =document.getElementById("total-count")

let interviewCount = 0
let rejectedCount = 0



cards.forEach(card=>{

    const interviewBtn =card.querySelector(".interview-btn")

    const rejectBtn =card.querySelector(".reject-btn")

    const deleteBtn =card.querySelector(".delete-btn")

    const status =card.querySelector(".status")



interviewBtn.onclick=function(){

    if(status.innerText==="INTERVIEW"){

        status.innerText="NOT APPLIED"
        interviewCount--

    }


    else{

        if(status.innerText==="REJECTED"){
        rejectedCount--
        }

        status.innerText="INTERVIEW"
        interviewCount++

    }

    updateDashboard()

}




rejectBtn.onclick=function(){

    if(status.innerText==="REJECTED"){

        status.innerText="NOT APPLIED"
        rejectedCount--

    }
    
    else{

        if(status.innerText==="INTERVIEW"){
        interviewCount--
        }

        status.innerText="REJECTED"
        rejectedCount++

    }

    updateDashboard()

}




deleteBtn.onclick=function(){

    if(status.innerText==="INTERVIEW"){
        interviewCount--
    }

    if(status.innerText==="REJECTED"){
        rejectedCount--
    }

    card.remove()

    updateDashboard()

    }

})



function updateDashboard(){

    const total =document.querySelectorAll(".job-card").length

        interviewCountEl.innerText=interviewCount
        rejectedCountEl.innerText=rejectedCount
        totalCountEl.innerText=total

}