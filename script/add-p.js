document.getElementById("comp-btn1").addEventListener("click",function(event){
  event.preventDefault();
  let newPara=document.createElement("div");
  newPara.textContent="you have complete the task Fix Mobile Button Issue";
  newPara.className="mt-2 pl-4 bg-[#F4F7FF] rounded-md ";
  document.getElementById("active-para").appendChild(newPara);
})

document.getElementById("comp-btn2").addEventListener("click",function(event){
  event.preventDefault();
  let newPara=document.createElement("div");
  newPara.textContent="you have complete the task Add Dark Mode";
  newPara.className="mt-2 pl-4 bg-[#F4F7FF] rounded-md ";
  document.getElementById("active-para").appendChild(newPara);
})

document.getElementById("comp-btn3").addEventListener("click",function(event){
  event.preventDefault();
  let newPara=document.createElement("div");
  newPara.textContent="you have complete the task Optimize Home Page";
  newPara.className="mt-2 pl-4 bg-[#F4F7FF] rounded-md ";
  document.getElementById("active-para").appendChild(newPara);
})

document.getElementById("comp-btn4").addEventListener("click",function(event){
  event.preventDefault();
  let newPara=document.createElement("div");
  newPara.textContent="you have complete the task Add New Emoji";
  newPara.className="mt-2 pl-4 bg-[#F4F7FF] rounded-md ";
  document.getElementById("active-para").appendChild(newPara);
})

document.getElementById("comp-btn5").addEventListener("click",function(event){
  event.preventDefault();
  let newPara=document.createElement("div");
  newPara.textContent="you have complete the task Integrate OpenAI API";
  newPara.className="mt-2 pl-4 bg-white-50 rounded-md pb-2";
  document.getElementById("active-para").appendChild(newPara);
})

document.getElementById("comp-btn6").addEventListener("click",function(event){
  event.preventDefault();
  let newPara=document.createElement("div");
  newPara.textContent="you have complete the task Improve Job Searching";
  newPara.className="mt-2 pl-4 bg-[#F4F7FF] rounded-md ";
  document.getElementById("active-para").appendChild(newPara);
})

// clear history
document.getElementById("clear-history")
.addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById("active-para").innerText="";
})

