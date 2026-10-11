let products = [
    "Iceland",
    "United States of America",
    "Brazil",
    "Belgium",
    "Afghanistan",
    "Aland Islands",
    "Albania",
    "Algeria"
]
const resultsbox = document.getElementById("results")
const search = document.getElementById('searchinput')
const country = document.querySelectorAll(".country")

search.onkeyup = function(){
    let filteredresults = []
    let input = search.value.trim("")
    if(input.length){
        filteredresults = products.filter((item)=>{
            return item.toLowerCase().includes(input.toLowerCase())
        })
    }
    display(filteredresults)
    
    
    if(!filteredresults.length){
        resultsbox.innerHTML = ''
    }
    country.forEach((country)=>{
        country.classList.remove("hidden")
    })
}
let dark = false
const darkmode = document.querySelector(".darkmode")
const body = document.querySelector("body")
const topp = document.querySelector(".topp")
darkmode.addEventListener("click", ()=>{
    if(dark == false){
        dark = true
    }else{
        dark = false
    }
    country.forEach((country)=>{
        country.classList.toggle("darkcountry")
    })
    body.classList.toggle("dark")
    darkmode.classList.toggle("active")
    search.classList.toggle("darksearch")
    topp.classList.toggle("darktext")
})

function display(filteredresult){
    const content = filteredresult.map((item)=>{
        return "<li onclick='selectinput(this)'>" + item + "</li>"
    })
    resultsbox.innerHTML = "<ul>" + content.join("") + "</ul>"
    if(dark == true){
        resultsbox.querySelectorAll("li").forEach((li)=>{
            li.classList.add("darkli")
        })
    }
}

function selectinput(li){
    search.value = li.textContent
    resultsbox.innerHTML = ''
    country.forEach((country)=>{
        if(country.querySelector(".name").textContent != search.value){
            country.classList.add("hidden")
        }
    })
}