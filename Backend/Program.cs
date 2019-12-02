using GraphQL;
using GraphQL.Types;
using System;

namespace Backend {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Hello World!");
            var schema = Schema.For(@"
                type User {
                    name: String,
                    side: String,
                    id: ID
                }

                type Query {
                    hello: String,
                    users: [User],
                    user(id: ID): User
                }
                ", _ => { _.Types.Include<Query>(); }
            );

            var json = schema.Execute(_ =>
            {
                _.Query = "{ user(id: 2) { name, side } }";
            });

            Console.WriteLine(json);
        }
    }
}
