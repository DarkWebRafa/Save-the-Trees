
var reasons = [
  "Trees Provide Shade",
  "Trees help in retaining the Rainwater",
  "Trees Provide fruits",
  "Trees are natural medicines"
];

// The names of the image files (must be in the same folder as the HTML file)
var images = [
  "shade.jpg",     
  "rain.jpg",      
  "fruit.jpg",     
  "medicine.jpg"   
];

var i = 0; // Initialize a counter variable to 0 (the first item in the list)

function nextslide() {
  // 1. Update the Text: Get element "reasontext" and change its content
  document.getElementById("reasontext").innerHTML = reasons[i];
  
  // 2. Update the Image: Get element "album" and change its source (image file)
  document.getElementById("album").src = images[i];
  
  // 3. Play Sound
  document.getElementById("audio").play();

  // 4. Move to the Next Index
  i++;

  // 5. The Loop FIX: If 'i' has reached 4 (the end of the list), reset it to 0 (the start)
  if (i >= reasons.length) {
      i = 0;
  }
}


// -- Step2 -- vvwrite your Javascript code here from reference documents 

