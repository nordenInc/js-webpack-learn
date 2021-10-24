async function test() {
  return await Promise.resolve("Test async await");
}

test().then((result) => console.log(result));

class StaticTest {
  static id = Date.now();
}

console.log(StaticTest.id);
