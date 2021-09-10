import Route from "@ioc:Adonis/Core/Route";

Route.get("/test", "TestsController.test");
Route.get("/test/:username", "TestsController.testDynamicRoute");

Route.get("/testShow", "TestsController.testShow");

Route.get("/about/:name?", "TestsController.about");

Route.get("/test", "TestsController.home");
