package testCommon

import com.google.inject.AbstractModule
import models.Todo
import models.dao.DAO
import play.api.inject.guice.GuiceInjectorBuilder

import scala.concurrent.Future

object FakeModule {
  val injector = new GuiceInjectorBuilder()
    .bindings(new FakeModule)
    .injector
}

class FakeModule extends AbstractModule {
  def configure() = {
    bind(classOf[DAO])
      .to(classOf[FakeDAO])
  }
}

class FakeDAO extends DAO {
  import scala.concurrent.ExecutionContext.Implicits.global
  @Override
  def getTodos = {
    Future{Nil}
  }
  @Override
  def addTodo(todo:Todo) = {
    Future{1}
  }
  @Override
  def updateTodo(todo:Todo) = {
    Future{1}
  }
}
