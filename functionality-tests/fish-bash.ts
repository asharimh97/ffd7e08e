export default function fishBash(num: number): void {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("fish bash");
      continue;
    }
    
    if (i % 3 === 0) {
      console.log("fish");
      continue;
    }
    
    if (i % 5 === 0) {
      console.log("bash");
      continue;
    }
      
    console.log(i);
    
  }
}