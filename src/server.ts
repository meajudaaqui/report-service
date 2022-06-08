import app from "./app";

app.listen(process.env.PORT , function (this: any) {
  console.info(
    "Server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  )
})