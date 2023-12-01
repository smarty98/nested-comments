const commentsec = document.querySelector('.comments-section');

function createInput(){
  let div = document.createElement('div');
  div.setAttribute("class","replies")
  div.innerHTML += `
  <input type="text" class="input" placeholder="enter your reply">
  <button class="submit" id="submit">submit</button>`
return div;
}
function addReply(text){
  let div = document.createElement('div');
  div.setAttribute("class","all-comments")
 div.innerHTML+=`
  <div class="comment-card">
    <p class="txt">${text}</p>
    <span class="reply">Reply</span>
  </div>`
return div;
}

commentsec.addEventListener('click',(e)=>{
  let replyclicked = e.target.classList.contains("reply")
  let submitclicked = e.target.classList.contains("submit")
  let closestcard = e.target.closest('.all-comments')
  if(replyclicked){
closestcard.appendChild(createInput())
  }
  if(submitclicked){
const commentDetails = e.target.closest('.replies')
if(commentDetails.children[0].value){
  closestcard.appendChild(addReply(commentDetails.children[0].value))
  commentDetails.remove()
}
  }
})
