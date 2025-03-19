function task1() {
    return new Promise((resolve) => {
         setTimeout(() => {
            resolve("User data loaded");
         }, 2000);
    });
}

async function fetchData() {
    try {
        const user = await task1();
        console.log(user);
    } catch(error){
        console.error(error);
    }
}

fetchData();