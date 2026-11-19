/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  console.log("Mouse over triggered");
  console.log("Alt text:", previewPic.alt);
  console.log("Source:", previewPic.src);

  document.getElementById("image").innerHTML = previewPic.alt;
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
	}

function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    console.log("Mouse out triggered");

document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
		
	}

function addTab() {
  console.log("Page loaded: adding tabindex to images");
  
  var images = document.querySelectorAll(".preview");

  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("tabindex added to image " + (i + 1));
  }
}