let score = JSON.parse(localStorage.getItem('score'));

            if(!score){
              score ={
                wins:0,
                losses:0
              };  
            }
            updateScore();
            
            let value='';
            function compGuess(){
                const computerguess =Math.random();
                
                if(computerguess >=0 && computerguess <0.5){
                    value='Heads';
                }else if(computerguess >=0.5 && computerguess <1){
                    value='Tails';
                }
            };
            let result='';
            function userGuess(guess){
                
                if (guess === 'Heads'){
                    if(value === 'Heads'){
                        result ='You Win';
                        score.wins+=1;
                    }else if(value === 'Tails'){
                        result='You Lose';
                        score.losses+=1;
                    }
                }else if(guess === 'Tails'){
                    if(value === 'Tails'){
                        result ='You Win';
                        score.wins+=1;
                    }else if(value === 'Heads'){
                        result ='You Lose';
                        score.losses+=1;
                    }
                }
                localStorage.setItem('score',JSON.stringify(score));
                document.querySelector('.js-move').innerHTML =`Your Guess:${guess}......=>${value}`;
                document.querySelector('.js-result').innerHTML =`Result:${result}`;
                updateScore();
                
            };
            
            function updateScore(){
                document.querySelector('.score').innerHTML =`wins:${score.wins},losses:${score.losses}`;
            };