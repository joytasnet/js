window.onload=()=>{
  const hides=document.getElementsByClassName("hide");
  for(let hide of hides){
    hide.addEventListener("mouseover",()=>{
      hide.style.color="blue";
    });
    hide.addEventListener("mouseout",()=>{
      hide.style.color="#aaa";
      hide.style.fontSize="16px";
    });
    hide.addEventListener("click",()=>{
      hide.style.fontSize="40px";
    });
  }
};