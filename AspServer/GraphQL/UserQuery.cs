using System.Linq;
using AspServer.Database;
using GraphQL.Types;
using Microsoft.EntityFrameworkCore;

namespace AspServer.GraphQL {
    public class UserQuery : ObjectGraphType {
        public UserQuery(ApplicationDbContext db) {
            Field<UserType>(
              "User",
              arguments: new QueryArguments(
                new QueryArgument<IdGraphType> { Name = "id", Description = "The ID of the User." }),
              resolve: context => {
                  var id = context.GetArgument<int>("id");
                  var user = db
              .Users
              .Include(a => a.Coordinates)
              .Include(a => a.Group)
              .FirstOrDefault(i => i.Id == id);
                  return user;
              });

            Field<ListGraphType<UserType>>(
              "Users",
              resolve: context => {
                  var users = db.Users.Include(a => a.Coordinates).Include(a => a.Group);
                  return users;
              });
        }
    }
}