using GraphQL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Backend {
    public class Query {
        [GraphQLMetadata("users")]
        public IEnumerable<User> GetUsers() {
            return DB.GetUsers();
        }

        [GraphQLMetadata("hello")]
        public string GetHello() {
            return "Hello Query class";
        }

        [GraphQLMetadata("user")]
        public User GetUser(int id) {
            return DB.GetUsers().SingleOrDefault(j => j.Id == id);
        }
    }
}
