using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EticaretProje.Domain.ResponseClasses
{
    public class ResponseObject<T>
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public T ResultObject { get; set; }
        public ICollection<T> ResultObjects { get; set; }
    }
}
