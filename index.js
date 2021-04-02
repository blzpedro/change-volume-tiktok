function initSlider(){
    const awaitDiv = setInterval(() => {
        let position = document.querySelector("div.K_10X")
        let hasVideo = document.querySelector("video")
        if (position && hasVideo) {
            clearInterval(awaitDiv)
    
            //create volume slider with DOM
            let divSlider = document.createElement('div')
            let volumeSlider = document.createElement("input")
            let volumeContent = document.createElement("p")
            divSlider.appendChild(volumeSlider)
            divSlider.appendChild(volumeContent)
    
            //set attributes from slider and value
            volumeSlider.setAttribute('id', 'volumeSlider')
            volumeSlider.setAttribute('type', 'range')
            volumeSlider.setAttribute('min', '0')
            volumeSlider.setAttribute('max', '100')
            volumeSlider.setAttribute('value', '100')
            volumeContent.style.color = 'white'
            volumeContent.style.textAlign = 'center'
            volumeContent.innerHTML = 100 + '%'
            
            //get key press to hide and show slider
            let bodyKeyPressed = document.querySelector('body')
            let visible = true
            bodyKeyPressed.addEventListener('keypress', (e) => {
                e.key == '0' ? visible = !visible : null
                visible ? volumeSlider.style.display = 'block' : volumeSlider.style.display = 'none'
                visible ? volumeContent.style.display = 'block' : volumeContent.style.display = 'none'
            })
        
            //get slider value to change volume 
            volumeSlider.addEventListener("change", ({ target }) => {
                volume = target.value/100
                setVolume(volume)
                volumeContent.innerHTML = Math.round(volume*100) + '%'
            });
        
            let hasSlider = document.getElementById('volumeSlider')
            !hasSlider ? position.appendChild(divSlider) : null
            
        }
    }, [1000]);
}

const eventStoriesChange = setInterval((e) => {
    //event for handle stories change and set value choosed from slider
    let contentStories = document.querySelector("div.qbCDp")
    let volumeSlider = document.getElementById('volumeSlider')
    let volume = volumeSlider ? volumeSlider.value : 0
    let tagsContent = contentStories ? contentStories.children : null
    if(tagsContent && tagsContent.length == 4){
        initSlider()
        tagsContent[2].volume = volume/100
    }
}, [500])
  
const setVolume = (volume) => {
    const video = document.querySelector("video")
    video.volume = volume
};