using Microsoft.EntityFrameworkCore;

namespace AspServer.Database {
    public class ApplicationDbContext : DbContext {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        public DbSet<Group> Groups { get; set; }

        public DbSet<Coordinate> Coordinates { get; set; }
    }
}
