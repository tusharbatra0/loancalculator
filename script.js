let get = document.getElementById("get")
get.addEventListener("click", function calc(){
  var amount =  document.getElementById("amount").value
  var interestrate =  document.getElementById("interestrate").value
  var months =   document.getElementById("month").value

   var interest = (amount * (interestrate*.02)/months)
   var payment = (amount/months)+interest;
   document.getElementById("payment").innerHTML = "Monthly Payment is ₹"+(payment.toFixed(2))+"<br> Monthly Interest is ₹"+(interest.toFixed(2));
   var totalpayments = payment * months;
   var totalinterest = interest * months ;
document.getElementById("totalpayment").innerHTML = "Total Payment is ₹"+(totalpayments.toFixed(2))+"<br> Total Interest is ₹"+(totalinterest.toFixed(2));
})

