// Objects with the help of constructors
// const TinderUser = new Object();

const TinderUser = {}


TinderUser.id = "123";
TinderUser.name = "Hamna";
TinderUser.isloggedin = false ;

// console.log(TinderUser);

const regUser = {
    email : "xyz@gmail.com",
    fullname : {
        userFullname : {
            firstname : "Hamna",
            Lastname : "Nasir"
        }
    }
}

// console.log(regUser.fullname.userFullname);

const object1 = {
    1 : "a",
    2 : "b"
}
const object2 = {
    3 : "a",
    4 : "b"
}
const object4 = {
    5 : "a",
    6 : "b"
}
//  const object3 = { object1 , object2 }; 
//  const object3 = Object.assign({}, object1, object2, object4);

const object3 = { ...object1, ...object2, ...object4 };
//  console.log(object3);


const users = [
  {
    id: 1,
    name: "Hamna",
    email: "xyz@gmail.com",
    isloggedin: false,
  },
  {
    id: 2,
    name: "Hammad",
    isloggedin: false,
  },
  {
    id: 3,
    name: "Hafsa",
    isloggedin: false,
  },
];

// console.log(users[1].name);

// console.log(TinderUser);
// console.log(Object.keys(TinderUser));   // datatype of keys is array
// console.log(Object.values(TinderUser)); // datatype of values is array
// console.log(Object.entries(TinderUser)); // datatype of entries is array of array

// console.log(TinderUser.hasOwnProperty("name"));



const course = {
    name : "JS Basics",
    price : 999,
    courseInstructor : "Hamna"
}
// console.log(course.courseInstructor);

const {courseInstructor : Instructor} = course;
// console.log(Instructor);


// {
//     "name" : "Hamna",
//     "age" : 21,
//     "address" : "Karachi"
// }
[
    {},
    {},
    {}
]

// API Format

// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }
