import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class TestsController {
  async test(ctx: HttpContextContract) {
    // return {
    //   mdg: "Hello adonis",
    // };
    // return ctx.request.all();
    return ctx.request.all();
  }

  async testDynamicRoute(ctx: HttpContextContract) {
    return ctx.params;
  }
}
