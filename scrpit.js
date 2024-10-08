function changeText(){ 
   var hello = document.getElementById("myhello");
   console.log(hello.innerHTML);
   hello.innerHTML='course cube'
   console.log(hello.innerHTML);

   var hai = document.getElementById('myhai');
   console.log(hai.innerHTML);
   hai.innerHTML = "ok!!"
   console.log(hai.innerHTML);
} 