FROM maven:3.9.4-eclipse-temurin-21 AS build
WORKDIR /pro-nft-marketplace-parag/backend
COPY backend .
RUN mvn clean package -DskipTests

FROM openjdk:21-jdk-slim
COPY --from=build /target/polycruz-0.0.1-SNAPSHOT.jar polycruz.jar
EXPOSE 8085
ENTRYPOINT ["java","-jar","polycruz.jar"]