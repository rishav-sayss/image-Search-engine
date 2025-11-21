let UNSPLASHKEY = "MfjX02hGSbUjetebdd6raAbRxt1_m5w59vtcjabyVtI";
let input = document.querySelector("#input");
let form = document.querySelector("#form");
let showresult = document.querySelector(".showresult");
let moreimg = document.querySelector(".moreimg");
let keyword = "";
let page = 1;
async function searchimg() {
    keyword = input.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${UNSPLASHKEY}&per_page=12`;
    let response = await fetch(url);
    let data = await response.json();
    let result = data.results.slice(0,9);
    if(page===1){
        showresult.innerHTML="";
    }
    result.forEach((val,index) => {
        let img = document.createElement("img");
        img.classList.add(index);
        img.src = val.urls.small;
        let imagelink = document.createElement("a");
        imagelink.href = val.links.html;
        imagelink.target = "_blank"
        imagelink.appendChild(img);
        showresult.appendChild(imagelink);
    });
    moreimg.style.display = "block"
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() === "") {
        alert("Please enter something");
        return;
    }
    page = 1;
    searchimg();
})

moreimg.addEventListener("click",()=>{
    page++;
    searchimg();
})