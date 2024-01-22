using EticaretProje.Domain.Dtos;
using EticaretProje.Domain.Entities;
using EticaretProje.Domain.ResponseClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretProje.Business.Abstract
{
    public interface IAdminRepository : IBaseRepository<Admin>
    {
        public Task<ResponseObject<Admin>> Login(UserLoginDto model);
    }
}
