﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EticaretProje.Domain.Abstract;

namespace EticaretProje.Domain.Entities
{
    public class CartProduct : BaseObject
    {
        public int ProductId { get; set; }
        public int CartId { get; set; }
        public int Quantity { get; set; }
    }
}
