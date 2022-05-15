// validate form name and phone number
function validateForm(nameField, numberField) {
  let pattern = /^(\+98|0)?9\d{9}$/;

  if (!nameField.length || !pattern.test(numberField)) {
    alert('لطفا تمام فیلد هارا پر کنید');
    return false
  };
  return true
};

<input
  name="mobile"
  id="phone"
  inputmode="numeric"
  pattern="^(\+98|0)?9\d{9}$"
  placeholder="09123456789"
  maxlength="11"
  title="شماره تلفن نامعتبر است"
/>