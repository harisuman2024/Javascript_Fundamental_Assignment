let TypeOfPackage = "overnight";

switch (TypeOfPackage) {
  case "standard":
    console.log("package will be delivered in next 3-5 Days");
    break;
  case "express":
    console.log("package will be delivered in next 1-2 Days");
    break;
  case "overnight":
    console.log("package will be delivered by tomorrow");
    break;
  default:
    console.log("Invalid package Type");
}
