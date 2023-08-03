window.onload=()=>{
  const path="images/";
  const images=["cat1.jpg","cat2.jpg","cat3.jpg"];
  let index=0;
  const ele=document.getElementById("mainImage");
  ele.addEventListener("click",()=>{
    ele.src=path+images[++index % images.length];
  });
};