function sayHi(){
  alert("hi! everyone~")}; 

  let age = 25;
  age = 25+8;
  console.log(age);
  
  //const 常數，無法變更
  const pi = 3.14159;
  console.log(pi);

  let noodle = 65 ;
  let rice = 20 ;
  let total = noodle + rice ;
  console.log(total)

  let country = "Taiwan";
  let city = "Taoyung";
  console.log("I'm come from " + city +" "+ country + ".")

  let p2 = `I'm come from ${city} ${country}.`
  console.log(p2);
  
  //.length 計算字串長度
  let length = p2.length;
  console.log(length);
  
  //.replace 取代字串
  let new_p2 = p2.replace("I'm","You're");
  console.log(new_p2);
  
  //解構:將陣列或是物件拆解為變數
  const obj = {
    brand:"Apple",
    color:"sliver",
    GB:"256g"
  }
  
  let brand = obj.brand;
  let color = obj.color;
  let GB = obj.GB;

  console.log(`brand:${brand},color:${color},GB:${GB}`)
