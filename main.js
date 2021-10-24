function startClassification()
{

navigator.mediaDevices.getUserMedia
({

    audio:true

})

classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bJlUrAxwD/model.json' , modelReady);

}

function modelReady() {

    classifier.classify(gotResults);

}

function gotResults(error, results) {

    if (error)
    {

        console.log(error);

    }

    else
    {

        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I Can Hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('cat');
        img1 = document.getElementById('dog');
        img2 = document.getElementById('goat');
        img3 = document.getElementById('elephant');

        if (results[0].label == "Meowing")
        {
            document.getElementById('cat').style.display = 'inline';
            img.src = 'Cat.png';
            document.getElementById('dog').style.display = 'none';
            document.getElementById('elephant').style.display = 'none';
            document.getElementById('goat').style.display = 'none';

        }

        else if (results[0].label == "Barking")
         {

            document.getElementById('dog').style.display = 'inline';
            img1.src = 'Dog.png';
            document.getElementById('cat').style.display = 'none';
            document.getElementById('elephant').style.display = 'none';
            document.getElementById('goat').style.display = 'none';
         
        }

        else if (results[0].label == "Trumpeting")
         {

            document.getElementById('elephant').style.display = 'inline';
            img2.src = 'Elephant.png';
            document.getElementById('dog').style.display = 'none';
            document.getElementById('cat').style.display = 'none';
            document.getElementById('goat').style.display = 'none';
         
             }

         else 
         {
            document.getElementById('goat').style.display = 'inline';
            img3.src = 'Goat.png';
            document.getElementById('dog').style.display = 'none';
            document.getElementById('elephant').style.display = 'none';
            document.getElementById('cat').style.display = 'none';

         }

        }

    }




