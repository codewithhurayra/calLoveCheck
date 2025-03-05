const mybtn = document.querySelector('.btn')
mybtn.addEventListener('click', (evt) => {
    console.log(evt);
    
    let nameOne = document.querySelector('#name_1').value;
    let nameTwo = document.querySelector('#name_2').value;
    let score = Math.random();
    score = score * 100;
    score= Math.floor(score) + 1;
    if (score > 60){
        document.querySelector('#result').innerHTML = `Your name is ${nameOne} and your crush name is  ${nameTwo} Congratulation You Achieve What you Want ${score}%`;
        document.querySelector('#result').style.color = 'gold';
    }
    else{
    document.querySelector('#result').innerHTML = `Your name is ${nameOne},  Crush name is  ${nameTwo} and Love Score is ${score}%`;
    document.querySelector('#result').style.color = 'red';
}
})

// you go together l oil aniked water