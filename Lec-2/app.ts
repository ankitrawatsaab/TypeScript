// object 
const person :{
    name: string;
    age: number;
    xyz: {
        address: string;
    }
} = {
    name: "Alice",
    age: 30,
    xyz : {
        address : "123 Main St"
    }
}
console.log(person);

// array
const developerProfile :{
    fullName: string;
    experienceLevel: string;
    techStack: string[]; // array of strings
} = {
  fullName: "Ankit Rawat",
  experienceLevel: "fresher",
  techStack: ["MERN", "JavaScript"]
};
console.log(developerProfile);

const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

let favoriteColors1: string[];
favoriteColors1 = ["blue", "green", "red"];

let favoriteColors2: any[]; //loose ts power 
favoriteColors2 = ["blue", "red" , 90, 50];


// tuple

const courseCatalog : {
    platform: string;
    categories: string[];
    totalCourses: number;
    courses: [string, number, boolean]; // tuple
    
} = {
  platform: "Online Learning",
  categories: ["Web Development", "Data Structures", "DevOps"],
  totalCourses: 3,
  courses : ["Web Development", 120, true]
};
console.log(courseCatalog);

// Error: Tuple can only have 3 elements as defined
// courseCatalog.courses = ["Data Structures", 100, false, 50000]; 

// Error: Type 'number' is not assignable to type 'string'
// courseCatalog.courses[0] = 150; 




// enum

enum OrderStatus {Pending, Shipped, Delivered ,Cancelled}

const currentOrder :{
    orderId: number;
    status: OrderStatus;
} = {
  orderId: 1201,
  status: OrderStatus.Shipped
};
console.log(currentOrder);

if(currentOrder.status === OrderStatus.Shipped) {
    console.log("Your order has been shipped!");
}else if(currentOrder.status === OrderStatus.Delivered) {
    console.log("Your order has been delivered!");
}else if(currentOrder.status === OrderStatus.Pending) {
    console.log("Your order is pending.");
}else {
    console.log("Your order has been cancelled.");
}