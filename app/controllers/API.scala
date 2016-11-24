package controllers

import com.google.inject.Inject
import models.dao.DAO
import models.Todo
import play.Logger
import play.api.libs.json.Json
import play.api.mvc.{Action, BodyParsers, Controller}
import play.api.libs.concurrent.Execution.Implicits.defaultContext

import scala.concurrent.Future

class API @Inject()(dao: DAO) extends Controller {

  def getTodos =  Action.async { implicit request =>
    Logger.info("getTodo called!")
    implicit val jsonWrites = Json.writes[Todo]
    dao.getTodos.map { todos =>
      Logger.info(s"get succeeded ${todos.size}")
      Ok(Json.toJson(todos))
    }
  }

  def createTodo = Action.async(BodyParsers.parse.json) { implicit request =>
    Logger.info("createTodo called!")
    implicit val jsonReads = Json.reads[Todo]
    request.body.validate[Todo].fold(
      errors => {
        Future{BadRequest("")}
      },
      todo => {
        dao.addTodo(todo).map { cnt =>
          Logger.info(s"create succeeded $cnt")
          Ok("")
        }
      }
    )
  }

  def updateTodo = Action.async(BodyParsers.parse.json) { implicit request =>
    Logger.info("updateTodo called!")
    implicit val jsonReads = Json.reads[Todo]
    request.body.validate[Todo].fold(
      errors => {
        Future{BadRequest("")}
      },
      todo => {
        dao.updateTodo(todo).map { cnt:Int =>
          cnt match {
            case 0 =>
              Logger.info(s"update failed")
              NotFound("")
            case _ =>
              Logger.info(s"update succeeded")
              Ok("")
          }
        }
      }
    )
  }
}
