const getData = require("./mongodb");
const update = async () => {
  const db = await getData();

  const result = await db.updateOne(
    { name: "max pro 50" },
    { $set: { name: "max pro 10" } }
  );

  console.log(result);
};

update();
