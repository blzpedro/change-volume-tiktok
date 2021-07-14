function initSlider(){
    const awaitDiv = setInterval(() => {
        let position = document.querySelector("div.desktop-container")
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
            volumeContent.setAttribute('id', 'volumeContent')
            volumeContent.style.color = 'blue'
            volumeContent.style.textAlign = 'center'
            divSlider.style.position = 'fixed'
            divSlider.style.top = '10px'
            divSlider.style.right = '10px'
            divSlider.style.zIndex = '99999'
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
    initSlider()
    //event for handle stories change and set value choosed from slider
    let volumeSlider = document.getElementById('volumeSlider')
    let volume = volumeSlider ? volumeSlider.value : 0
    let allVideos = document.querySelectorAll("video")
    if(allVideos.length){
        volume = volume/100
        setVolume(volume)
    }
}, [500])
  
const setVolume = (volume) => {
    const video = document.querySelector("video")
    const allVideos = document.querySelectorAll("video")
    if(allVideos.length){
        [...allVideos].map(v => v.volume = volume)
    }
    video.volume = volume
};