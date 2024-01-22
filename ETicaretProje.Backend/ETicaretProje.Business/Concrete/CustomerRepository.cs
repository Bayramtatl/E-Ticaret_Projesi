using EticaretProje.Domain.Dtos;
using EticaretProje.Domain.Entities;
using EticaretProje.Domain.ResponseClasses;
using ETicaretProje.Business.Abstract;
using ETicaretProje.Dal.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretProje.Business.Concrete
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly DataContext _dataContext;
        public CustomerRepository(DataContext dataContext)
        {
            _dataContext= dataContext;
        }

        public async Task<ResponseObject<Customer>> Add(Customer model)
        {
            try
            {
                _dataContext.Customers.Add(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<Customer>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<Customer>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<Customer>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }

        public async Task<ResponseObject<Customer>> Delete(int id)
        {
            Customer deleted_obj = _dataContext.Customers.FirstOrDefault(i => i.Id == id);
            if (deleted_obj != null)
            {
                _dataContext.Customers.Remove(deleted_obj);
                var saveResult = await _dataContext.SaveChangesAsync();
                if (saveResult > 0)
                {
                    return new ResponseObject<Customer>()
                    {
                        Message = "Silme İşlemi Başarılı",
                        ResultObject = null,
                        Success = true
                    };
                }
                return new ResponseObject<Customer>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = deleted_obj,
                    Success = false
                };
            }
            else
            {
                return new ResponseObject<Customer>()
                {
                    Message = "İlgili kayıt bulunamadı",
                    ResultObject = null,
                    Success = false
                };
            }
        }

        public async Task<ResponseObject<Customer>> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<ResponseObject<Customer>> GetById(int id)
        {
            var Customer = _dataContext.Customers.FirstOrDefault(i => i.Id == id);
            if (Customer != null)
            {
                return new ResponseObject<Customer>()
                {
                    Message = "İşlem Başarılı, kayıtlar listelendi",
                    ResultObject = Customer,
                    Success = true
                };
            }
            else
            {
                return new ResponseObject<Customer>()
                {
                    Message = "Sistemde ilgili kayıt bulunmamaktadır",
                    ResultObject = null,
                    Success = true
                };
            }
        }

        public async Task<ResponseObject<Customer>> Update(Customer model)
        {
            try
            {
                _dataContext.Customers.Update(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<Customer>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<Customer>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<Customer>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }
        public async Task<ResponseObject<Customer>> Login(UserLoginDto model)
        {
            try
            {
                var customer =_dataContext.Customers.FirstOrDefault(i=> i.Email== model.Email && i.Password == model.Password);
                if (customer != null)
                {
                    return new ResponseObject<Customer>()
                    {
                        Message = "Başarıyla giriş yaptınız",
                        ResultObject = customer,
                        Success = true
                    };
                }
                else
                {
                    return new ResponseObject<Customer>()
                    {
                        Message = "Kullanıcı adı veya şifre hatalı",
                        ResultObject = null,
                        Success = false
                    };
                }
            }
            catch (Exception)
            {
                return new ResponseObject<Customer>()
                {
                    Message = "Giriş başarısız",
                    ResultObject = null,
                    Success = false
                };
            }
        }
    }
}
