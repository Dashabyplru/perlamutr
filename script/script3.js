let arr = [
    "pictures4.0/doctor.jpg",
    "pictures4.0/doctor1.jpg",
    "pictures4.0/doctor2.png",
    "pictures4.0/doctor3.png",
    "pictures4.0/doctor4.png",
    "pictures4.0/doctor5.png",
    "pictures4.0/doctor6.png",
    "pictures4.0/doctor7.png",
    "pictures4.0/doctor8.png",
    "pictures4.0/doctor9.png",
    "pictures4.0/doctor10.png"
    
]
let count = 1;
let doctorImg = document.getElementById("doctor").getElementsByTagName("img")
for(let i=0;i< doctorImg.length;i++){
    doctorImg[i].onclick = function(){
        switch(i)
        {
        case 0:
            count = (count - 1 > 0)? count - 1 : count;
            break;
        case 2:
            count = (count + 1 < arr.length-1)? count + 1 : count;
            break;    
        }
        for(let j = 0; j<doctorImg.length;j++){
            doctorImg[j].src = arr[count - 1 + j];
        }
    }
}