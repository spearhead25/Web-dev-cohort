function checktruthyValue(value) {
    if (value) {
        console.log("Truthy");
    } else {
        console.log("Falsy");
    }
}

checktruthyValue(1);
checktruthyValue(0);
checktruthyValue("hitesh");
checktruthyValue("");
checktruthyValue([]);
checktruthyValue([1,2,3]);

function login(username, password){
    if(username === 'admin' && (password === "1234" || loginIp == "127")){
        console.log("Login successful");
    } else {
        console.log("Invalid credentials");
    }
}

let salesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smartphone", price: 800 },
    { product: "Headphones", price: 150 },
    { product: "Keyboard", price: 80 },
];

let initialValue = 0;
let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0);
console.log(totalSales);

let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 72 },
    { user: "Charlie", activityCount: 33 },
];

let mostactiveuser = userActivity.reduce((maxuser, curruser) => {
    return curruser.activityCount > maxuser.activityCount ? curruser : maxuser;
}, userActivity[0]);

console.log(mostactiveuser);

let expenses = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
    { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce((report, expense) => {
    if (!report[expense.category]) {
        report[expense.category] = 0;
    }
    report[expense.category] += expense.amount;
    return report;
}, {});
console.log("Expense Report", expenseReport);

let tasks = [
    { description: "Write report", completed: false, priority: 2 },
    { description: "Send email", completed: true, priority: 3 },
    { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingTasks = tasks.filter((task) => !task.completed).sort((a,b) => a.priority-b.priority);

console.log(pendingTasks);

let movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3] },
    { title: "Movie B", ratings: [5, 5, 4] },
    { title: "Movie C", ratings: [3, 4, 2] },
]

let averageRatings = movieRatings.reduce((acc, movie) => {
    acc[movie.title] = movie.ratings.reduce((sum, rating) => sum+rating, 0)/movie.ratings.length;
    return acc;
}, {});

console.log(averageRatings);

function greet(name) {
    console.log(`Hello ${name}`);
}


let globalVar = "I am global"
function modifyGlobal(){
    globalVar = "I am modified";
    let blockScopedVar = "I am blocked-scoped"; 
    console.log(blockScopedVar);
}

let config = function(){
    let settings = {
        theme: "dark"
    }
    return settings
}()

let person1 = {
    name: "ravi",
    greet: function(){
        console.log(`Hello ${this.personsName}`);
    }
}

let person2 = {
    personsName: "hitesh",
}

person1.greet.call({ personsName: "Mukul" });
person1.greet.call(person2);

const obj = {
    personName: 'Mukul',
    greet: function(){
       console.log(`Hello, ${this.personName}`);
    },
};

console.log('Hello form JS');

setTimeout(obj.greet.bind(obj), 2*1000);

console.log('Bye Bye');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const user = {
//     name: "Harry",
//     age: 28,
//     password: "123",
// }

// const proxyUser = new Proxy(user, {
//     get(target, prop){
//         if(prop === "password"){
//             throw new Error("Access Denied");
//         }
//         return target[prop];
//     },
//     set(target, prop, user){}
// });
// console.log(proxyUser.password);

function negativeIndex(arr){
    return new Proxy(arr, {
        get(target, prop){
            const index = Number(prop);
            if(index<0){
                return target[target.length + index]
            }
            return target[index];
        },
        set(target, prop, value){
            const index = Number(prop);
            if(index<0){
                target[target.length + index] = value;
            } else {
                target[index] = value;
            }
            return true;
        },
    })
}

let neg = negativeIndex(arr);

console.log(arr[-1]);
console.log(neg[-1]);
neg[-1] = 22;
console.log(neg);
console.log(arr);

