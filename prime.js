let number=5;

let factors=0;

for(let i=1;i<=5;i++){

if(number%i==0){

factors++;

}

}

(factors==2)? console.log("prime number") : console.log ("not a prime number")