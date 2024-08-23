export default function isPalindrome(str: string): boolean {
  const reversed: string = str.split("").reverse().join("");
  return str === reversed;
}