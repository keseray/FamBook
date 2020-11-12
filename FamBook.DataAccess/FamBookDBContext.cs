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
        public DbSet<Account> Accounts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.;Database=FamBookDB;Trusted_Connection=True;");
        }
    }
}
