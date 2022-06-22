using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data;

    public class BookContext : DbContext
    {
        public BookContext(DbContextOptions<BookContext> options) : base(options) { }

        public DbSet<Book> Books { get; set; }

    }

