using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EticaretProje.Domain.Abstract;

namespace EticaretProje.Domain.Entities
{
    public class Adress : BaseObject
    {
        public string Description { get; set; }
        public string County { get; set; }
        public string City { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
    }
}
