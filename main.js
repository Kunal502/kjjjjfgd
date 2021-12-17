//strat code

Webcam.set({
    height: 450,
    width: 450,
    image_format: 'jpeg',
    jpeg_quality: 95
});

webcam = document.getElementById('webcam-view');
Webcam.attach( "#webcam-view" );

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result-snap").innerHTML = '<img id="captured-img" src="' + data_uri + '"/>';
    });
}

console.log("ml5 version :",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oN09BMbr0/model.json", modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function speek(){
    synth = window.speechSynthesis;
    speek_data_1 = "The Predication 1 Is "+ prediction_1;
    utterThis = new SpeechSynthesisUtterance(speek_data_1);
}


function check(){
    img = document.getElementById('captured-img');
    classifier.classify(img ,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        //enter results in console
        console.log(results);
        //

        document.getElementById("result_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;

        //call speek funcation

        speek();

          //predication 1

        if(results[0].label == "2finger"){
            document.getElementById("update-gust").innerHTML = "&#9996;";
        }
        if(results[0].label == "thumb"){
            document.getElementById("update-gust").innerHTML = "&#128077;";
        }


    }

}