                                        //Strings in JS

    let str = 'tamana zehra'
        console.log(str.length);            //string length str.length
        console.log(str[5]);                 //string indices str[0], str[1]

                            //Template Literals
    let obj ={
        item : "pen",
        cost : 10,
    };

    // console.log("the cost of", obj.item, "is", obj.cost, "rupees")
    let output = `the cost of ${obj.item} is ${obj.cost} rupees`;
        console.log(output);

                            //String Methods in JS

        console.log(str.toUpperCase());
        console.log(str.toLowerCase());
        console.log(str.trim());
        console.log(str.slice(4,7));

    let str1 = "race";
    let str2 = "car";
        console.log(str1.concat(str2));
        console.log(str1 + str2)

    