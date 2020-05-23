var nesteddata = {
    innerdata: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberdata: {
            primeno: [2, 3, 5, 7, 11],
            fibo: [1, 1, 2, 3, 5, 8, 13]
        },
        addsnack: function (snack) {
            this.snacks.push(snack);

            return this;
        }
    }
}
for(i=0;i<nesteddata.innerdata.numberdata.primeno.length;i++)
{
    {
        console.log("prime numbers are" +" "+nesteddata.innerdata.numberdata.primeno[i]);
    }
    }
        for (i = 0; i < nesteddata.innerdata.numberdata.fibo.length; i++)
        {
            console.log("fibo numbers are" +" "+nesteddata.innerdata.numberdata.fibo[i]);


    }

console.log(nesteddata.innerdata.order[1]);
for(i=0;i<nesteddata.innerdata.snacks.length;i++)
{
    {
        console.log("snacks are" +" "+nesteddata.innerdata.snacks[i]);

    }
}
nesteddata.innerdata.snacks.push("chocolate");
console.log("snacks are" +" "+nesteddata.innerdata.snacks[3]);
