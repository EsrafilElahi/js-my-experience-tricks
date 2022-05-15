const persianToEnglishDigits = (digit) => String(digit)
  .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
  .replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));

  
const updatePhone = function (e) {
  document.getElementById('phone').value = persianToEnglishDigits(e.target.value).replace(/\D/g, "");
}