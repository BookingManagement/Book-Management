using Book_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Book_backend.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) 
            : base(options)
        { }
        public DbSet<BookMaster> BookMasters { get; set; }
        public DbSet<ShopMaster> ShopMasters { get; set; }
        public DbSet<AgentMaster> AgentMasters { get; set; }
        public DbSet<InwardMaster> InwardMasters { get; set; }
    }
}
