const form = document.querySelector("#form");
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const inputTerm = form.elements.q.value;
    console.log(inputTerm);
    const res= await axios.get(`https://api.tvmaze.com/search/shows?q=${inputTerm}`);
    //console.log(res.data.show.image.medium);
    makeImages(res.data);
    form.elements.q.value='';
})

const makeImages = (shows)=>{
    for(let result of shows){
        if(result.show.image){
            const img= document.createElement('img');
            img.setAttribute("id", "images");
            img.src= result.show.image.medium;
            document.body.innerHTML.img = "";
            document.body.insertBefore(img,document.getElementById('images'));
        }
    }

}