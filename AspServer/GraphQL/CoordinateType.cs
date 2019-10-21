using GraphQL.Types;

namespace AspServer.GraphQL {
    public class CoordinateType : ObjectGraphType<Coordinate>{
        public CoordinateType() {
            Name = "Coordinate";

            Field(x => x.Id, type: typeof(IdGraphType)).Description("The id of the coordinate");
            Field(x => x.Latitude).Description("The latitude of the coordinate");
            Field(x => x.Longitude).Description("The longitude of the coordinate");
        }
    }
}