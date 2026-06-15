const pro = new Promise((res, rej)=>{
    setTimeout(() => {
        res("Payment Done")
    }, 5000);
});

async function getdata() {
    const v = await pro;
    console.log(v);
    console.log("Dashboard Access");
    
    
}
getdata();