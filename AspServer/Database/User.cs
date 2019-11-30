using System.Collections.Generic;

namespace AspServer {
    public class User {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Coordinate> Coordinates { get; set; }
        public Group Group { get; set; }
        public Difficulty Difficulty { get; set; }
    }

    public enum Difficulty {
        Unset,
        Easy,
        Medium,
        Hard
    }
}