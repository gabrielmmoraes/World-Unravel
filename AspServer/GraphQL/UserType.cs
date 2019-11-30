using GraphQL.Types;

namespace AspServer.GraphQL {
    public class UserType : ObjectGraphType<User> {
        public UserType() {
            Name = "User";

            Field(x => x.Id, type: typeof(IdGraphType)).Description("The ID of the User.");
            Field(x => x.Name).Description("The name of the User");
            Field(x => x.Coordinates, type: typeof(ListGraphType<CoordinateType>)).Description("Coordinates of the User");
            Field(x => x.Group, type: typeof(GroupType)).Description("Group of the User");
        }
    }
}
