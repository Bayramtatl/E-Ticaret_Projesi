using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EticaretProje.Domain.Abstract;

namespace EticaretProje.Domain.Entities
{
    public class Order : BaseObject
    {
        public Order()
        {
            CartProducts= new List<CartProduct>();
        }
        public int CustomerId { get; set; }
        public Customer? Customer { get; set; }
        public ICollection<CartProduct>? CartProducts { get; set; }
        public DateTime CreatedDate { get; set; }

    }
}
