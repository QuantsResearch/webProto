package controllers

import models.Todo
import play.api.libs.json.{JsObject, JsString, Json}
import play.api.test.FakeRequest
import play.api.test.Helpers._
import testCommon.BaseSpec

class APISpec extends BaseSpec {
  val controller:API = injector.instanceOf[API]
  "getTodos" should {
    s"""return ${OK}"""in {
      val result = controller.getTodos(FakeRequest())
      status(result) mustBe OK
    }
  }
//  "createTodo" when {
//    "given incorrect parameter" should {
//      s"""return ${BAD_REQUEST}""" in {
//        val result = controller.createTodo(
//          FakeRequest()
//          .withHeaders(CONTENT_TYPE -> JSON)
//          .withJsonBody(JsObject(Seq("test" -> JsString("ok"))))
//        )
//        status(result.run()) mustBe BAD_REQUEST
//      }
//    }
//}
//  "createTodo" when {
//    "given correct parameter" should {
//      s"""return ${OK}""" in {
//        implicit val jsonWrites = Json.writes[Todo]
//        val result = controller.createTodo(
//          FakeRequest()
//            .withHeaders(CONTENT_TYPE -> JSON)
//            .withJsonBody(Json.toJson(Todo.apply(1, "test", false)))
//        )
//        status(result.run()) mustBe OK
//      }
//    }
//  }
}
