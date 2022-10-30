function Bmi(weight,height){
    let result= weight / (height * height);
    return result;
}

console.log(Bmi(85,1.7));

function Status(Bodymass){
    if (Bodymass <18,5) {
        return "لديك نقص في الوزن";
    } else if (Bodymass >=18.5 ||Bodymass <= 25) {
      return"وزنك صحي"
    }else if (Bodymass >25) {
        return"لديك زيادة في الوزن"
    }
    
    
}



function calculate() {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    let bmi_value = Bmi(weight,height)


    let desc = Status(bmi_value)

    let box = document.getElementById('result')

    box.innerText = bmi_value + " == " + desc
}