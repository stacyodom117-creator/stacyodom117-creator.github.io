$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    
    //createPlatform(x, y, width, height)// TODO 2 - Create Platforms
//createPlatform(x, y, width, height, color, minX, maxX, Speed)
createPlatform(200, 625, 100, 10, "red")
createPlatform(475, 500, 100, 10, "orange")
createPlatform(200, 375, 100, 10, "yellow")
createPlatform(475, 250, 100, 10, "green")

createPlatform(750, 625, 100, 10, "red")
createPlatform(1025, 500, 100, 10, "orange")
createPlatform(750, 375, 100, 10, "yellow")
createPlatform(1025, 250, 100, 10, "green")



// TODO 3 - Create Collectables
//createCollectable("type", xPos, yPos, gravityNum, bounceNum Between 0 and .99)
//type can be any of these. In "". database diamond grace kennedi max steve
createCollectable("database", 700, 100, 1, 1)
createCollectable("kennedi", 500, 100, 1, 0)
createCollectable("max", 800, 100, 1, 0)

// TODO 4 - Create Cannons
//createCannon(wallLocation, position, timeBetweenShots, width, height)

//Cannon on the top side of the canvas. at position 700, about mid way through.
createCannon("top", 700, 1000);

//Cannon on the right side of the canvas. at position 200, about 1/4 through.
createCannon("right", 200, 1000);

//Cannon on the left side of the canvas. at position 400, about 1/2 through.
createCannon("left", 400, 1000);




    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
