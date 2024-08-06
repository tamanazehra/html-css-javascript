            //Practicing Conditional Statements

/* Writing a code which can give grades to students according to their scores
                ~90 - 100 : A
                ~80 - 89 : B
                ~70 - 79 : C
                ~60 - 69 : D
                ~50 - 59 : E
                ~0 - 49 : FAIL!! */

    let score = prompt("ENTER YOUR SCORE:");
    let grade;
            if(score >= 90 && score<=100){
                console.log("YOUR GRADE IS", grade = "A");
            } else if(score >= 80 && score <= 89){
                console.log("YOUR GRADE IS", grade = "B");
            }else if(score >= 70 && score <= 79){
                console.log("YOUR GRADE IS", grade = "C");
            }else if(score >= 60 && score <= 69){
                console.log("YOUR GRADE IS", grade = "D");    
            }else if(score >= 50 && score <= 59){
                console.log("YOUR GRADE IS", grade = "E");    
            }else if(score >= 0 && score <= 49){
                console.log("YOUR GRADE IS", grade = "FAIL!");    
            }