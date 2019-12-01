using System.Collections.Generic;
using AspServer.Database;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace AspServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            IWebHost host = CreateWebHostBuilder(args).Build();
            using (IServiceScope scope = host.Services.CreateScope())
            {
                ApplicationDbContext context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

                var group1 = new Group { Id = 1, Name = "Party 1" };
                var coordenates1 = new List<Coordinate>
                {
                    new Coordinate
                    {
                        Id = 1,
                        UserId = 1,
                        Latitude = 38.8951M,
                        Longitude = -77.0364M
                    },
                    new Coordinate
                    {
                        Id = 2,
                        UserId = 1,
                        Latitude = 38.8951M,
                        Longitude = -77.0384M
                    }
                };
                var coordenates2 = new List<Coordinate>
                {
                    new Coordinate
                    {
                        Id = 3,
                        UserId = 2,
                        Latitude = 38.8952M,
                        Longitude = -77.0365M
                    },
                    new Coordinate
                    {
                        Id = 4,
                        UserId = 2,
                        Latitude = 38.8952M,
                        Longitude = -77.0385M
                    }
                };
                context.Users.AddRange(
                    new User
                    {
                        Id = 1,
                        Name = "Ary do Dota",
                        Group = group1,
                        Coordinates = coordenates1,
                        Difficulty = Difficulty.DIFICIL
                    },
                    new User
                    {
                        Id = 2,
                        Name = "Ana",
                        Group = group1,
                        Coordinates = coordenates2,
                        Difficulty = Difficulty.MEDIO
                    }
                );

                context.SaveChanges();
            }
            host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
