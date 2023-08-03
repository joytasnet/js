window.onload = ()=>{
  const result=document.getElementById("result");
  const fruits = document.querySelectorAll("[data-price]");
  for(let fruit of fruits){
    fruit.addEventListener("change",()=>{
      let sum = 0;
      for(let fruit of fruits){
        sum += parseInt(fruit.value) * parseInt(fruit.getAttribute("data-price"));
      }
      result.textContent=sum+"円です!";
    });
  }
};