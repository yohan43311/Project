const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]; //img 폴더 안에 있는 이미지들과 images Array안의 이름을 같게 해주면 됨

const chosenImage = images[Math.floor(Math.random() * images.length)];//랜덤 뽑기

const bgImage  = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);