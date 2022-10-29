function NOT_NULL(x) {
  return [undefined, null, "", "---"].indexOf(x) < 0
    ? null
    : "این فیلد اجباریست";
}

{
  id: "national_id",
  label: "کد ملی",
  component: TextField,
  validators: [NOT_NULL],
}
