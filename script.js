const cards = document.querySelectorAll(".job-card")

const tabs = document.querySelectorAll(".tab")

const interviewCountEl =document.getElementById("interview-count")

const rejectedCountEl =document.getElementById("rejected-count")

const totalCountEl =document.getElementById("total-count")

const jobCount =document.getElementById("job-count")

const noJob =document.getElementById("no-job")

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
    filterJobs(activeTab)

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
filterJobs(activeTab)

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
    filterJobs(activeTab)

}

})






function updateDashboard(){

    const total =document.querySelectorAll(".job-card").length

    interviewCountEl.innerText=interviewCount
    rejectedCountEl.innerText=rejectedCount
    totalCountEl.innerText=total

}





let activeTab="all"

tabs.forEach(tab=>{

    tab.onclick=function(){

        tabs.forEach(t=>t.classList.remove("active"))

        tab.classList.add("active")

        activeTab=tab.dataset.tab

        filterJobs(activeTab)

}

})






function filterJobs(type){

    let visible=0

    document.querySelectorAll(".job-card")
    .forEach(card=>{

    const status=card.querySelector(".status").innerText

    if(type==="all"){
    card.style.display="block"
    visible++
}


else if(type==="interview" && status==="INTERVIEW"){

    card.style.display="block"
    visible++

}

else if(type==="rejected" && status==="REJECTED"){

    card.style.display="block"
    visible++

}

else{
    card.style.display="none"
}

})


const total=document.querySelectorAll(".job-card").length


if(type==="all"){

    jobCount.innerText=
    total+" jobs"

}

else{

    jobCount.innerText=
    visible+" of "+total+" jobs"

}


if(visible===0){
    noJob.style.display="block"
}

else{
    noJob.style.display="none"
}

}