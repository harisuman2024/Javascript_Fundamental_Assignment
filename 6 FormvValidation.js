let name = "Hari Suman";
let email = "harisuman7082@gmail.com";
let age = "23";

if (typeof name !== "string") {
  console.log(`Name Should Be A String..`);
} else if (typeof email !== "string") {
  console.log(`Email Should Be A String..`);
} else if (typeof age !== "number") {
  console.log(`Age Should Be A Number..`);
} else {
  console.log(`All the fields are proper..`);
}
