package testCommon

import akka.actor.ActorSystem
import akka.stream.ActorMaterializer
import play.api.mvc.Results
import org.scalatestplus.play.PlaySpec

class BaseSpec extends PlaySpec with Results {
  val injector = FakeModule.injector
  implicit val system = ActorSystem.apply()
  implicit val materializer = ActorMaterializer()
}
