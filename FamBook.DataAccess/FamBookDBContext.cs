using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using FamBook.DataAccess.Entities;
using Microsoft.EntityFrameworkCore.Design;

namespace FamBook.DataAccess
{
    public class FamBookDBContext : DbContext
    {
        public FamBookDBContext(DbContextOptions<FamBookDBContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=FamBookDB;Trusted_Connection=True;");
        }
        public DbSet<Account> Accounts { get; set; }


    }
}
