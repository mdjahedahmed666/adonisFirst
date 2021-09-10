import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class TestsController {
  async test(ctx: HttpContextContract) {
    // return {
    //   mdg: "Hello adonis",
    // };
    return ctx.request.all();
  }

  async testDynamicRoute(ctx: HttpContextContract) {
    return ctx.params;
  }

  async testShow(ctx: HttpContextContract) {
    return "This is the homepage";
  }

  async home({ view }: HttpContextContract) {
    return view.render("welcome");
  }
  async about({ params }: HttpContextContract) {
    return params.name
      ? `Welcome to ${params.name}'s page`
      : `This is about page`;
  }
}
