                                //Functions in JS

            function myFunction() {
                console.log("learning JS");
                console.log("hello there!!");
                console.log("learning JS");
                console.log("hello there!!");
            } 
            
            myFunction();
            myFunction();                   //helps to avoid redundency in our code


                            // creating a function for sum of 2 numbers

                function sum(x, y) {
                    console.log(x + y);
                }

                sum(10, 20);
                sum(14, 24);

                            // creating a function for multiplication of 2 numbers
                
                function prod(x, y){
                    console.log(x * y);
                }

                prod(2, 4);
                prod(3, 7);

                                //Arrow function  (compact way of writing functions)

                        //sum function
                const arrowSum = (x, y) => {
                    console.log(x + y);
                }

                 arrowSum(20, 40);

                        //mul function
                const arrowProd = (x, y) => {
                    console.log(x * y);
                }

                arrowProd(12, 8);

                            //creating a function using the "function" keyword that takes a string as an argument
                            //& return the number of vowels in the string

                            function countVowels(str) {
                                let count = 0;
                                                              
                                for (let char of str) {
                                    if (char === "a" ||
                                        char === "e" ||
                                        char === "i" || 
                                        char === "o" || 
                                        char === "u"
                                    ) {
                                        count++;
                                    }
                                }

                                
                                return count;
                            }
                               




