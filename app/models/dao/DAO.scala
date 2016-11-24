package models.dao

import models.Todo

import scala.concurrent.Future

trait DAO {

  def getTodos:Future[Seq[Todo]]
  def addTodo(todo:Todo):Future[Int]
  def updateTodo(todo:Todo):Future[Int]
}
