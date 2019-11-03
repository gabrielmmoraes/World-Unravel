using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AspServer.Database;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace AspServer {
    public class Program {
        public static void Main(string[] args) {
            IWebHost host = CreateWebHostBuilder(args).Build();
            using (IServiceScope scope = host.Services.CreateScope()) {
                ApplicationDbContext context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

                var userDbEntry = context.Users.Add(
                  new User {
                      Id = 1,
                      Name = "Ary do Dota",
                  }
                );

                context.Coordinates.AddRange(
                  new Coordinate {
                      Id = 1,
                      UserId = 1,
                      Latitude = 38.8951M,
                      Longitude = -77.0364M
                  },
                  new Coordinate {
                      Id = 2,
                      UserId = 1,
                      Latitude = 38.8951M,
                      Longitude = -77.0384M
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
