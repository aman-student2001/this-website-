// function hello(){
//     console.log("sushant");
//     console.log("aman");
//     console.log("nitish");
//     console.log("sudhir");
// }

// setTimeout(hello,2000) //timeout


// console.log("Amankumar")
// console.log("sushant kumar");

// setTimeout(()=>{
//     console.log("hello");
// },4000);

// 

function getdata(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },3000);
}

getdata(1,()=>{
    console.log("aman....");
    getdata(2,()=>{
        console.log("sushant.....");
      getdata(3,()=>{
        console.log("nitish...");
        getdata(4,()=>{
            console.log("sudhir.....");
            getdata(5,()=>{
                console.log("aditya");
                getdata(6,()=>{
                    console.log("ritik....");
                    getdata(7,()=>{
                        console.log("suman.....");
                        getdata(8,()=>{
                            console.log("nishant....");
                            getdata(9,()=>{
                                console.log("shanti.....");
                                getdata(10,()=>{
                                 console.log("ranjan.....");
                                 console.log("welcome to all team");
                                 console.log("apna callage");
                                });
                               // console.log("welcome to all team....");
                            });
                        });
                    });
                });
            });
        });

      });
    });
});
