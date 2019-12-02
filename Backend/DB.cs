using System;
using System.Collections.Generic;

namespace Backend {
    public class DB {
        public static IEnumerable<User> GetUsers() {
            return new List<User>() {
                new User(){ Id = 1, Name ="Luke", Side="Light"},
                new User(){ Id = 2, Name ="Yoda", Side="Light"},
                new User(){ Id = 3,  Name ="Darth Vader", Side="Dark"}
            };
        }
    }
}