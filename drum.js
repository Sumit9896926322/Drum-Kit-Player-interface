window.addEventListener('keydown',function(event){
const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
const music = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  music.currentTime = 0;
  music.play();
  if(!key)return;
  key.classList.add('playing');

})

function removeTrans(e){
  //console.log(e);
  if(e.propertyName !== "transform") return;
//  console.log(e.propertyName);
 this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key =>key.addEventListener('transitionend', removeTrans))



var equaliser1 =document.querySelectorAll('.eq-1');
var equaliser2 =document.querySelectorAll('.eq-2');
var equaliser3 =document.querySelectorAll('.eq-3');
var equaliser4 =document.querySelectorAll('.eq-4');
var equaliser5 =document.querySelectorAll('.eq-5');
var equaliser6 =document.querySelectorAll('.eq-6');


document.addEventListener('keydown',function(event){
if(event.which === 65){
  for( var i = equaliser1.length - 1 ;i>2;i--){
    if(i%2 === 0){
    equaliser1[i].style.background ="#f17a37";
    equaliser1[i].style.transition ="0.3s";
  }
    else{
    equaliser1[i].style.background ="#0f6a1c";
    equaliser1[i].style.transition ="0.3s";
    }
}
}
    if(event.which !== 65)
    {
      for( var i = equaliser1.length - 1 ;i>=0;i--){
      equaliser1[i].style.background ="rgba(0,0,0,0.2)";
      }
    }

  })

  document.addEventListener('keydown',function(event){
  if(event.which === 83){
    for( var i = equaliser2.length - 1 ;i>0;i--){
      if(i%2 === 0){
      equaliser2[i].style.background ="#3e037c";
      equaliser2[i].style.transition ="0.3s";
       }
      else{
      equaliser2[i].style.background ="#137851";
      equaliser2[i].style.transition ="0.3s";
      }
  }
  }
      if(event.which !== 83)
      {
        for( var i = equaliser2.length - 1 ;i>=0;i--){
        equaliser2[i].style.background ="rgba(0,0,0,0.2)";
        }
      }
    })

    document.addEventListener('keydown',function(event){
    if(event.which === 68){
      for( var i = equaliser3.length - 1 ;i>4;i--){
        if(i%2 === 0){
        equaliser3[i].style.background ="#7bfef6";
        equaliser3[i].style.transition ="0.3s";
         }
        else{
        equaliser3[i].style.background ="#d784f4";
        equaliser3[i].style.transition ="0.3s";
        }
    }
    }
        if(event.which !== 68)
        {
          for( var i = equaliser3.length - 1 ;i>=0;i--){
          equaliser3[i].style.background ="rgba(0,0,0,0.2)";
          }
        }
      })

      document.addEventListener('keydown',function(event){
      if(event.which === 74){
        for( var i = equaliser4.length - 1 ;i>0;i--){
          if(i%2 === 0){
          equaliser4[i].style.background ="##3f562c";
          equaliser4[i].style.transition ="0.3s";
           }
          else{
          equaliser4[i].style.background ="#001500";
          equaliser4[i].style.transition ="0.3s";
          }
      }
      }
          if(event.which !== 74)
          {
            for( var i = equaliser4.length - 1 ;i>=0;i--){
            equaliser4[i].style.background ="rgba(0,0,0,0.2)";
            }
          }
        })
        document.addEventListener('keydown',function(event){
        if(event.which === 75){
          for( var i = equaliser5.length - 1 ;i>3;i--){
            if(i%2 === 0){
            equaliser5[i].style.background ="#d1cbc7";
            equaliser5[i].style.transition ="0.3s";
             }
            else{
            equaliser5[i].style.background ="#df1c23";
            equaliser5[i].style.transition ="0.3s";
            }
        }
        }
            if(event.which !== 75)
            {
              for( var i = equaliser4.length - 1 ;i>=0;i--){
              equaliser5[i].style.background ="rgba(0,0,0,0.2)";
              }
            }
          })

          document.addEventListener('keydown',function(event){
          if(event.which === 76){
            for( var i = equaliser6.length - 1 ;i>0;i--){
              if(i%2 === 0){
              equaliser6[i].style.background ="#b61d1e";
              equaliser6[i].style.transition ="0.3s";
               }
              else{
              equaliser6[i].style.background ="#000000";
              equaliser6[i].style.transition ="0.3s";
              }
          }
          }
              if(event.which !== 76)
              {
                for( var i = equaliser6.length - 1 ;i>=0;i--){
                equaliser6[i].style.background ="rgba(0,0,0,0.2)";
                }
              }
            })
/*
var equaliser2 =document.querySelectorAll('.eq-1-1');
var equaliser3 =document.querySelectorAll('.eq-1-2');
var equaliser4 =document.querySelectorAll('.eq-1-3');
var equaliser5 =document.querySelectorAll('.eq-1-4');
var equaliser6 =document.querySelectorAll('.eq-1-5');

function equ(j){
  for( var i = equaliser[j].length - 1 ;i>2;i--){
    if(i%2 === 0){
    equaliser[j][i].style.background ="#dd9243";
    equaliser1[j].style.transition ="0.2s";
     }
    else{
    equaliser1[j].style.background ="#0e942b";
    equaliser1[j].style.transition ="0.2s";
    }
}
    if(event.which !== 65)
    {
      for( var i = equaliser1.length - 1 ;i>2;i--){
      equaliser1[j].style.background ="white";
      }
      }
    }


    document.addEventListener('keydown',function(event){
      switch(event.which){
      case 65:
        equ(0);
        console.log("ooooooo");
        break;

      case 83:
        equ(1);
        break;

      case 68:
        equ(2);
        break;

      case 74:
        equ(3);
        break;

      case 75:
        equ(4);
        break;
      case 76:
       equ(5);
       break;

      default:
      break;
      }

    })
*/
