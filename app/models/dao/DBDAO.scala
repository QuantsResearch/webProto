package models.dao

import com.google.inject.Inject
import models.Todo
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.JdbcProfile

import scala.concurrent.{Future}

class DBDAO @Inject()(protected val dbConfigProvider: DatabaseConfigProvider) extends DAO {
  val dbConfig = dbConfigProvider.get[JdbcProfile]
  val db = dbConfig.db
  import dbConfig.driver.api._

  class TodoTable(tag: Tag) extends Table[Todo] (tag, "TODO") {
    def id            = column[Int]("ID", O.PrimaryKey)
    def text          = column[String]("TEXT")
    def completed         = column[Boolean]("COMPLETED")

    def * = (id, text, completed) <> (Todo.tupled, Todo.unapply)
  }
  val todos = TableQuery[TodoTable]

  @Override
  def getTodos:Future[Seq[Todo]] = {
    dbConfig.db.run(todos.result)
  }
  @Override
  def addTodo(todo:Todo):Future[Int] = {
    dbConfig.db.run(todos += todo)
  }
  @Override
  def updateTodo(todo:Todo):Future[Int] = {
    dbConfig.db.run(todos.filter(_.id === todo.id).update(todo))
  }
}
