// CRUD Operation
use("CrudDB")

console.log(db)


// Create 
db.createCollection("courses")

db.courses.insertOne({
    name: "Aniket web dev free course",
    price: 0,
    assignments: 12,
    projects: 45
})

db.courses.insertMany([
  {
    "name": "Aniket web dev free course",
    "price": 0,
    "assignments": 12,
    "projects": 45
  },
  {
    "name": "Full Stack Roadmap Bootcamp",
    "price": 199,
    "assignments": 25,
    "projects": 10
  },
  {
    "name": "AI & Machine Learning Basics",
    "price": 0,
    "assignments": 8,
    "projects": 5
  },
  {
    "name": "React Mastery Course",
    "price": 499,
    "assignments": 15,
    "projects": 7
  },
  {
    "name": "Python for Beginners",
    "price": 99,
    "assignments": 10,
    "projects": 3
  },
  {
    "name": "Backend Dev With Node.js",
    "price": 299,
    "assignments": 20,
    "projects": 6
  }
]
)

// Read

let a = db.courses.find({price: 0})
// console.log(a.count())
// console.log(a.toArray())

let b = db.courses.findOne({price: 0})
console.log(b)

// Update

db.courses.updateOne({price: 0}, {$set:{price: 100}})

db.courses.updateMany({price: 0}, {$set:{price: 1000}})


// delete

db.courses.deleteOne({price: 100})

db.courses.deleteMany({price: 100})