using EticaretProje.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretProje.Dal.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Adress> Adresses { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartProduct> CartProducts { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>()
       .HasOne(c => c.Adress)
       .WithOne(a => a.Customer)
       .HasForeignKey<Adress>(c => c.CustomerId);

            modelBuilder.Entity<Customer>()
        .HasOne(c => c.Cart)
        .WithOne(a => a.Customer)
        .HasForeignKey<Cart>(c => c.CustomerId);

            modelBuilder.Entity<Admin>().HasData(
        new Admin
        {
            Id = 1,
            Email = "b@b.com",
            Password = "123",
            Name = "Bayram",
            Surname = "Tatlı",
            IsActive = true,
        });
            modelBuilder.Entity<Cart>().HasData(
        new Cart
        {
            Id = 1,
            CustomerId = 1,
            IsActive = true,
        });

            modelBuilder.Entity<Customer>().HasData(
        new Customer
        {
            Id = 1,
            Name = "Kayra",
            Surname = "Alaz",
            Email = "k@k.com",
            Password = "123",
            IsActive = true,
            PhoneNumber = "534321",
            AdressId = 1,
        });
            modelBuilder.Entity<Adress>().HasData(
        new Adress
        {
        Id = 1,
        City = "Bursa",
        County = "Nilüfer",
        Description = "beşevler",
        CustomerId = 1,
        IsActive = true,
        });
        }
    }
}
