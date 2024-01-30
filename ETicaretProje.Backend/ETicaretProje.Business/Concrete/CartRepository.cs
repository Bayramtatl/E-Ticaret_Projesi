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
    public class CartRepository : ICartRepository
    {
        private readonly DataContext _dataContext;
        public CartRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<ResponseObject<Cart>> Add(Cart model)
        {
            try
            {
                _dataContext.Carts.Add(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<Cart>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<Cart>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<Cart>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }

        public async Task<ResponseObject<Cart>> Delete(int id)
        {
            Cart deleted_obj = _dataContext.Carts.FirstOrDefault(i => i.Id == id);
            if (deleted_obj != null)
            {
                _dataContext.Carts.Remove(deleted_obj);
                var saveResult = await _dataContext.SaveChangesAsync();
                if (saveResult > 0)
                {
                    return new ResponseObject<Cart>()
                    {
                        Message = "Silme İşlemi Başarılı",
                        ResultObject = null,
                        Success = true
                    };
                }
                return new ResponseObject<Cart>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = deleted_obj,
                    Success = false
                };
            }
            else
            {
                return new ResponseObject<Cart>()
                {
                    Message = "İlgili kayıt bulunamadı",
                    ResultObject = null,
                    Success = false
                };
            }
        }

        public Task<ResponseObject<Cart>> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<ResponseObject<Cart>> GetById(int id)
        {
            var Cart = _dataContext.Carts.FirstOrDefault(i => i.Id == id);
            if (Cart != null)
            {
                return new ResponseObject<Cart>()
                {
                    Message = "İşlem Başarılı, kayıtlar listelendi",
                    ResultObject = Cart,
                    Success = true
                };
            }
            else
            {
                return new ResponseObject<Cart>()
                {
                    Message = "Sistemde ilgili kayıt bulunmamaktadır",
                    ResultObject = null,
                    Success = true
                };
            }
        }

        public async Task<ResponseObject<Cart>> Update(Cart model)
        {
            try
            {
                _dataContext.Carts.Update(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<Cart>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<Cart>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<Cart>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }
    }
}
