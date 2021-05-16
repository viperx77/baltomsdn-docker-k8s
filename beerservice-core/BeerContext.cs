using Microsoft.EntityFrameworkCore;

namespace BaltoMSDN
{
  public class BeerContext : DbContext
  {
      public BeerContext(DbContextOptions<BeerContext> options) : base(options) { }
      public DbSet<beer> beer { get; set; }

      protected override void OnModelCreating(ModelBuilder modelBuilder)
      { 
        modelBuilder.Entity<beer>().HasData(
              new beer
              {
                id = 1,
                name = "Sam Adams",
                style = "Boston Lager",
                abv = 5.5
              }
          );
      }      
  }

    public class beer
    {
        public int id { get; set; }
        public string name { get; set; }
        public string style { get; set; }
        public double abv { get; set; }
    }

}