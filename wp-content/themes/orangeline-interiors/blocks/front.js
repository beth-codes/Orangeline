//frontend js functionality
window.addEventListener('DOMContentLoaded', () => {
   const displayedVideos = document.querySelector('.displayed-video video');
   const videos = document.querySelectorAll('.thumb-bar-video .thumb-container .thumb-video-item video');
   const thumbBarItems = document.querySelectorAll('.thumb-bar-video .thumb-container .thumb-video-item');
   const individualTexts = document.querySelectorAll('.thumb-bar-video .thumb-container .texts');
   const text = document.querySelector('.text');
   const overlay = document.querySelector('.overlay');

   //set video describtion functionality
   function setText() {
      let setTextArray = [];
      for (let i = 0; i < individualTexts.length; i++) {
         const individualText = individualTexts[i];
         setTextArray.push(individualText.innerHTML);
      }
      return setTextArray;
   }
   //save individual text inside result
   var result = setText();
   
   //loop through viddeo, controls all click activity
   for (let i = 0; i < videos.length; i++) {
      const video = videos[i]
      video.controls = false;
      video.setAttribute('text', result[i]);
      text.textContent = video.getAttribute('text', result[0]);
   
      video.addEventListener('click', e => {
         text.textContent = video.getAttribute('text', result[i]);
         displayedVideos.src = e.target.src;
         displayedVideos.poster = video.poster;
         displayedVideos.controls = true;

         if (text.classList.contains("none") || overlay.classList.contains("none")) {
            text.classList.remove("none");
            text.classList.add("text");
            overlay.classList.remove("none");
            overlay.classList.add("overlay");
         }
      })
      text.addEventListener('click', e => {
         displayedVideos.play();
         text.classList.add("none");
         overlay.classList.add("none");
      });
   }

   //pause podcast when another is clicked
   const tracks = Array.from(document.querySelectorAll('audio'));
   tracks.forEach(function (track) {
      track.addEventListener('play', (event) => {
         tracks.forEach(function (track) {
            if (track !== event.target) track.pause();
         })
      })
   })

   //Add new class for pages Banner
   const pageBody = document.querySelector('body')
   const bannerHome = document.querySelector('.banner-section')

   if (pageBody.className === 'home page-template-default page page-id-8 logged-in' || pageBody.className === 'home page-template-default page page-id-8') {
      if (bannerHome) {
         bannerHome.classList.remove("banner-page");
      }
   } else{
      if (bannerHome) {
         bannerHome.classList.add("banner-page");
      }
   }
   
   


})

