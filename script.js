document.addEventListener('DOMContentLoaded', ()=>{
  const quizForm = document.getElementById('quizForm');
  if(quizForm){
    quizForm.addEventListener('submit', e=>{
      e.preventDefault();
      let score = 0;
      const ans = quizForm.q1.value;
      if(ans==='4'){score=1;}
      document.getElementById('result').innerText = 'Score: '+score;
    });
  }
});

function downloadCertificate(){
  alert('Certificate download feature will be implemented with backend.');
}