FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY beerservice-core.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build /app .
ENV ASPNETCORE_URLS=http://+:5000
EXPOSE 5000

ENTRYPOINT ["dotnet", "beerservice-core.dll"]