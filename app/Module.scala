import com.google.inject.AbstractModule
import models.dao.{DAO, DBDAO}

class Module extends AbstractModule {
  def configure() = {
    bind(classOf[DAO])
      .to(classOf[DBDAO])
  }
}