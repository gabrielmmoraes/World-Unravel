using GraphQL.Types;

namespace AspServer.GraphQL {
    public class GroupType : ObjectGraphType<Group> {
        public GroupType() {
            Name = "Group";

            Field(x => x.Id, type: typeof(IdGraphType)).Description("The id of the group");
            Field("nomeDoGrupo", x => x.Name).Description("The name of the group");
            Field("usuarios", x => x.Users, type: typeof(ListGraphType<UserType>)).Description("Users of the Group");
        }
    }
}