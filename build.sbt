name := "webBoilerplate"

version := "1.0"

lazy val `webBoilerplate` = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.8"

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"

libraryDependencies ++= Seq(
  "com.h2database" % "h2" % "1.4.193",
  "com.typesafe.play" %% "play-slick" % "2.0.0",
  "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % "test"
)

javaOptions in Runtime ++= Seq("-Dconfig.resource=dev.conf","-Dlogger.resource=log/dev.xml")