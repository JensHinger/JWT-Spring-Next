FROM amazoncorretto:23-alpine-jdk
WORKDIR /app

COPY src /app/src
COPY .mvn /app/.mvn
COPY mvnw mvnw.cmd pom.xml /app
RUN /app/mvnw clean install

RUN rm -r /app/src
RUN rm -r /app/.mvn

CMD ["java", "-jar", "/app/target/jwt_backend-1.0.jar"]