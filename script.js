// script.js - adds small interactions
document.addEventListener('DOMContentLoaded', ()=>{
  // Typewriter intro on index
  const lines = [
    "I wrote this to say what my heart couldn't in person.",
    "I miss your smile. I miss your voice. I miss us.",
    "If I hurt you — I'm deeply sorry. Please read on."
  ];
  const tw = document.getElementById('typewriter');
  if(tw){
    let i=0,char=0;
    const speed=36;
    function step(){
      if(i<lines.length){
        if(char<=lines[i].length){
          tw.textContent = lines[i].slice(0,char) + (char%2? '▎':'');
          char++;
          setTimeout(step,speed);
        } else {
          char=0;i++;
          setTimeout(step,600);
        }
      } else {
        tw.textContent = "Whenever you're ready, click below. ❤️";
      }
    }
    step();
  }

  // Apology interactions
  const forgiveBtn = document.getElementById('forgiveBtn');
  if(forgiveBtn) forgiveBtn.addEventListener('click', ()=>{
    forgiveBtn.textContent = "Thank you... ❤️";
    explodeConfetti();
    setTimeout(()=>forgiveBtn.textContent = "I hope you'll forgive me", 2500);
  });

  const roseBtn = document.getElementById('roseBtn');
  if(roseBtn) roseBtn.addEventListener('click', ()=>{
    roseBtn.textContent = "🌹 Sent!";
    heartPulse();
    setTimeout(()=>roseBtn.textContent="Send a virtual rose 🌹",2000);
  });

  const sendReply = document.getElementById('sendReply');
  if(sendReply){
    sendReply.addEventListener('click', ()=>{
      const input = document.getElementById('replyInput');
      const val = (input && input.value) ? input.value.trim() : "";
      if(!val) {
        alert("If you want to say something, type it in — I'll listen.");
        return;
      }
      // show a thank you message; in a real site you'd send this to a server
      alert("Message received: \n\n"" + val + ""\n\nI'll read it with all my heart.");
      input.value = "";
    });
  }

  // small helper animations
  function heartPulse(){
    document.body.style.transition = "transform 0.25s ease";
    document.body.style.transform = "scale(1.01)";
    setTimeout(()=>document.body.style.transform = "",260);
  }

  // Confetti simple
  function explodeConfetti(){
    const c = document.createElement('div');
    c.className = 'confettiBurst';
    c.style.position='fixed';
    c.style.left='50%';
    c.style.top='20%';
    c.style.width='220px';
    c.style.height='120px';
    c.style.pointerEvents='none';
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),1600);
  }
});
