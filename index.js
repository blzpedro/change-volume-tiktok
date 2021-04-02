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
    

        position.appendChild(divSlider)
    }
  }, [1000]);
  
  const setVolume = (volume) => {
    const video = document.querySelector("video")
    video.volume = volume
  };