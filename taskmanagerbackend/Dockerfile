FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY . .

# Fix permission
RUN chmod +x mvnw

# Build the project
RUN ./mvnw clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/taskmanagerbackend-0.0.1-SNAPSHOT.jar"]
