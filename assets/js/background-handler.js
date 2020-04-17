valid_backgrounds = ["/assets/img/backgrounds/darthraider.png"]

function loadBackground() {
    var bg = valid_backgrounds[Math.min(Math.round(Math.random() * valid_backgrounds.length), valid_backgrounds.length - 1)];
    document.body.style.background = `url('${bg}') no-repeat center center fixed`;
    console.log(`Loaded background: ${bg}`);
}