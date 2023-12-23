export const persianToEnglishDigits = (digit: number | string): string =>
	String(digit)
		.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString()) // Convert to string
		.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString()); // Convert to string

export const preventNumbersTyping = (str: string): string => str.replace(/[0-9]/g, '');
export const preventLettersTyping = (str: string): string => str.replace(/\D/g, '');

export const setNumberDigitAndPreventLettersTypes = (value: string | number): string => {
	return preventLettersTyping(persianToEnglishDigits(value));
};
