peter_pan = "";
harry_potter = "";
function preload() {
peter_pan = loadSound("PeterPan.mp3");
harry_potter = loadSound("HarryPotter.mp3");
}
function setup() {
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}
function draw() {
image(video, 0, 0, 600, 500);
}