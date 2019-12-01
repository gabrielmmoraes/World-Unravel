using System.Collections.Generic;
using AspServer.Database;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace AspServer {
    public class Program {
        public static void Main(string[] args) {
            IWebHost host = CreateWebHostBuilder(args).Build();
            using (IServiceScope scope = host.Services.CreateScope()) {
                ApplicationDbContext context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

                var group1 = new Group { Id = 1, Name = "Party 1" };
                var group2 = new Group { Id = 2, Name = "Party 2" };
                var group3 = new Group { Id = 3, Name = "Party 3" };

                var user1 = new User {
                    Id = 1,
                    Name = "Gabriela",
                    Difficulty = Difficulty.MEDIO,
                    Group = group1,
                    Coordinates = new List<Coordinate>{
                        new Coordinate{ Latitude = -22.862717216466017M, Longitude = -43.22590030788871M },
                        new Coordinate{ Latitude = -22.86168907255886M, Longitude = -43.22841085552665M }
                    }
                };
                var user2 = new User {
                    Id = 2,
                    Name = "Matheus",
                    Difficulty = Difficulty.MEDIO,
                    Group = group1,
                    Coordinates = new List<Coordinate>{
                        new Coordinate{ Latitude = -22.860898187336925M, Longitude = -43.22313226818534M },
                        new Coordinate{ Latitude = -22.861886793145143M, Longitude = -43.22154440044852M }
                    }
                };
                var user3 = new User {
                    Id = 3,
                    Name = "Alice",
                    Difficulty = Difficulty.MEDIO,
                    Group = group2,
                    Coordinates = new List<Coordinate>{
                        new Coordinate{ Latitude = -22.85666083629548M, Longitude = -43.23218822479248M },
                        new Coordinate{ Latitude = -22.858088934424536M, Longitude = -43.23132909893485M }
                    }
                };
                var user4 = new User {
                    Id = 4,
                    Name = "Mario",
                    Difficulty = Difficulty.MEDIO,
                    Group = group2,
                    Coordinates = new List<Coordinate>{
                        new Coordinate{ Latitude = -22.850541605215252M, Longitude = -43.23407482206835M },
                        new Coordinate{ Latitude = -22.85200485074053M, Longitude = -43.23315214216723M }
                    }
                };
                var user5 = new User {
                    Id = 5,
                    Name = "Artur",
                    Difficulty = Difficulty.MEDIO,
                    Group = group3,
                    Coordinates = new List<Coordinate>{
                        new Coordinate{ Latitude = -22.851826889288102M, Longitude = -43.23514770567431M },
                        new Coordinate{ Latitude = -22.854327625335397M, Longitude = -43.23369026184082M }
                    }
                };
                var user6 = new User {
                    Id = 6,
                    Name = "Lucas",
                    Difficulty = Difficulty.MEDIO,
                    Group = group3,
                    Coordinates = new List<Coordinate>{
                        new Coordinate{ Latitude = -22.846465737500093M, Longitude = -43.23777465116359M },
                        new Coordinate{ Latitude = -22.844666265451313M, Longitude = -43.23607949506618M }
                    }
                };


                group1.Users = new List<User> { user1, user2 };
                group2.Users = new List<User> { user3, user4 };
                group3.Users = new List<User> { user5, user6 };

                context.Users.AddRange(user1, user2, user3, user4, user5, user6);

                context.Groups.AddRange(group1, group2, group3);

                context.SaveChanges();
            }
            host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
