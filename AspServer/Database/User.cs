using System.Collections.Generic;

namespace AspServer {
    public class User {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Coordinate> Coordinates { get; set; }
    }
}