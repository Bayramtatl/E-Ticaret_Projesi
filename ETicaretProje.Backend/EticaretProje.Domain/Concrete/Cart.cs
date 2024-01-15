using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EticaretProje.Domain.Abstract;

namespace EticaretProje.Domain.Entities
{
    public class Cart : BaseObject
    {
        public ICollection<CartProduct> CartProducts { get; set; }
        public int CustomerId { get; set; }
    }
}
