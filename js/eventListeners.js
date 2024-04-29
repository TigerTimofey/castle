window.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "w":
      if (player.velocity.y === 0) {
        player.velocity.y = -25;
      }
      break;
    case "a":
      keys.a.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;
  }
});

//stop moving when key is not pressed
window.addEventListener("keyup", function (e) {
  switch (e.key) {
    case "a":
      keys.a.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});
