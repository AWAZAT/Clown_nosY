noseX = 0;
noseY = 0;
function preload() {
    clown_nose = loadImage('https://i.postimg.cc/zDy5hQpR/clown-clipart-ball-10-1.png');
}

function setup()
{
    canvas = createCanvas(450,400);
    canvas.position(400,150);
    video = createCapture(VIDEO);
    video.size(450,400);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log('PoseNet Is Initialised');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);

        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
        
    }
}

function draw() 
{
    image(video, 0, 0, 450, 400);
    image(clown_nose, noseX-15, noseY-15, 30, 30);
}

function take_snapshot()
{
    save('MyFilterImage.png');
}