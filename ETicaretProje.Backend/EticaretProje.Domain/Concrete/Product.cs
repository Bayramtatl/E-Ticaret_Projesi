using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EticaretProje.Domain.Abstract;

namespace EticaretProje.Domain.Entities
{
    public class Product : BaseObject
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public string Price { get; set; }
    }
}
