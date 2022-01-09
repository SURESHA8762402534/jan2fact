function fn(){
    const inp = document.querySelector('.in');
    let fact = 1;
    const num = inp.value;
   
        if(num==1){
            fact = 1;
        }else{
            for(let i = num; i>0;i--){
                fact = fact*i;

            }
            console.log(fact)
        }

        const print = document.getElementById('print');
        print.innerText = fact;

    
    
}