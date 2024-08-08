            //                     //Arrays in JS
            //             // Collection of items 

            // let marks = [97, 85, 39, 76, 90, 76];
            // console.log(marks);

            // let heroes = ["Ironman", "Batman ", "Captain America", "Hulk", "Thor", "Spiderman", "Doctor Strange", "Black Widow", "Wolverine", "Black Panther", "Scarlet Witch"];
            // console.log(heroes);
            
            //                     // Array Indices
            //         console.log(heroes[3]);
            //         console.log(heroes[8]);
            //         console.log(heroes[10]);

            //                         //Looping over an Array
            //                     //for loop
            //     for(let idx=0; idx<heroes.length; idx++){
            //             console.log(heroes[idx])
            //     };

            //                     //for-of loop
            //     for (let hero of heroes){
            //         console.log(hero);
            //     };

                // Finding the avg marks of the entire class 
                //marks of students ->[85, 97, 44, 37, 76, 60]

            //     let marks = [85, 97, 44, 37, 76, 60];
            //     console.log(marks);

            //     let sum = 0;

            //     for(let val of marks){
            //         sum += val;             
            //     }
            //    let avg = sum / marks.length;
            //    console.log(`avg marks of the class is ${avg}`);


                //         // Array Methods
            
                // let foodItems = ["potato", "apple", "strawberry", "mango", "cola", "chocolate", "coffee"];
                //     console.log(foodItems);

                //    foodItems.push("chips");
                //    console.log(foodItems);

                //    foodItems.pop ();
                //    console.log(foodItems);

                        // creating  array and altering them using Array Methods
                        // array : Companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

            let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
            console.log(companies);

            companies.shift();
            console.log(companies)                  //deleting 1st item from array

            companies.splice(1, 1, "ola");
            console.log(companies)                  //replacing uber with ola

            companies.push("amazon");
            console.log(companies);                 //adding  item to array from end