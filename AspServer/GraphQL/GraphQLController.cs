using System;
using System.Linq;
using System.Threading.Tasks;
using AspServer.Database;
using GraphQL;
using GraphQL.Types;
using Microsoft.AspNetCore.Mvc;

namespace AspServer.GraphQL {
    [Route("api")]
    [ApiController]
    public class GraphQLController : Controller {
        private readonly ApplicationDbContext _db;

        public GraphQLController(ApplicationDbContext db) => _db = db;

        public async Task<IActionResult> Post([FromBody] GraphQLQuery query) {
            var inputs = query.Variables.ToInputs();

            var schema = new Schema {
                Query = new UserQuery(_db)
            };

            var result = await new DocumentExecuter().ExecuteAsync(_ => {
                _.Schema = schema;
                _.Query = query.Query;
                _.OperationName = query.OperationName;
                _.Inputs = inputs;
            });

            if (result.Errors?.Count > 0) {
                result.Errors.ToList().ForEach(i => {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.Error.Write("Error: ");
                    Console.ResetColor();
                    Console.Error.WriteLine(i);
                });
                return BadRequest();
            }

            return Ok(result);
        }
    }
}
