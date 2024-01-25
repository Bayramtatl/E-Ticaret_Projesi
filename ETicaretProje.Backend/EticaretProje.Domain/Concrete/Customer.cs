using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EticaretProje.Domain.Abstract;

namespace EticaretProje.Domain.Entities
{
    public class Customer: User
    {
        public Customer()
        {
            Orders= new List<Order>();
        }
        public string PhoneNumber { get; set; }
        public int AdressId { get; set; }
        public Adress Adress { get; set; }
        public int CartId { get; set; }
        public Cart Cart { get; set; }
        public ICollection<Order>? Orders { get; set; }


    }
}
