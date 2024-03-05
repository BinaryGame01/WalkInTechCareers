import app from "./app.js";

app.listen(process.env.PORT || 4000 , () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE Baby 01 </h1>`);
});