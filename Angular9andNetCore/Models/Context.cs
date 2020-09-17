using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace Angular9andNetCore.Models
{
    public class Context : DbContext
    {
        public Context() : base("Server = LAPTOP-2GGF1CMS; Database=Usuario;User Id = terry; Password=123;") { }


        public DbSet<Usuarios> Usuario { get; set; }
    }
}
