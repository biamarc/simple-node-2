// environment
const name = process.env.MY_NAME ? process.env.MY_NAME : 'Unknown';
const loops = process.env.NUM_LOOPS ? Math.abs(parseInt(process.env.NUM_LOOPS, 10)) : 5;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log(`Hello ${name}, i will print a message for ${loops} times`);
  let i = 0;
  while(i < loops) {
    console.log("Microservices rock!");
    await sleep(5000);
    ++i;
  }
}

main();
