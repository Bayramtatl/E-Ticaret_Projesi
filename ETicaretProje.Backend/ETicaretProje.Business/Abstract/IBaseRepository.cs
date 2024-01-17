using EticaretProje.Domain.ResponseClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretProje.Business.Abstract
{
    public interface IBaseRepository<T>
    {
        public Task<ResponseObject<T>> Add(T model);
        public Task<ResponseObject<T>> Delete(int id);
        public Task<ResponseObject<T>> GetAll();
        public Task<ResponseObject<T>> GetById(int id);
        public Task<ResponseObject<T>> Update(T model);
    }
}
