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
    public class OrderRepository : IOrderRepository
    {
        private readonly DataContext _dataContext;
        public OrderRepository(DataContext dataContext)
        {
            _dataContext= dataContext;
        }

        public async Task<ResponseObject<Order>> Add(Order model)
        {
            try
            {
                _dataContext.Orders.Add(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<Order>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<Order>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<Order>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }

        public async Task<ResponseObject<Order>> Delete(int id)
        {
            Order deleted_obj = _dataContext.Orders.FirstOrDefault(i => i.Id == id);
            if (deleted_obj != null)
            {
                _dataContext.Orders.Remove(deleted_obj);
                var saveResult = await _dataContext.SaveChangesAsync();
                if (saveResult > 0)
                {
                    return new ResponseObject<Order>()
                    {
                        Message = "Silme İşlemi Başarılı",
                        ResultObject = null,
                        Success = true
                    };
                }
                return new ResponseObject<Order>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = deleted_obj,
                    Success = false
                };
            }
            else
            {
                return new ResponseObject<Order>()
                {
                    Message = "İlgili kayıt bulunamadı",
                    ResultObject = null,
                    Success = false
                };
            }
        }

        public async Task<ResponseObject<Order>> GetAll()
        {
            var Order = _dataContext.Orders.ToList();
            if (Order != null)
            {
                return new ResponseObject<Order>()
                {
                    Message = "İşlem Başarılı, kayıtlar listelendi",
                    ResultObjects = Order,
                    Success = true
                };
            }
            else
            {
                return new ResponseObject<Order>()
                {
                    Message = "Sistemde ilgili kayıtlar bulunmamaktadır",
                    ResultObjects = null,
                    Success = true
                };
            }
        }

        public async Task<ResponseObject<Order>> GetById(int id)
        {
            var Order = _dataContext.Orders.FirstOrDefault(i => i.Id == id);
            if (Order != null)
            {
                return new ResponseObject<Order>()
                {
                    Message = "İşlem Başarılı, kayıtlar listelendi",
                    ResultObject = Order,
                    Success = true
                };
            }
            else
            {
                return new ResponseObject<Order>()
                {
                    Message = "Sistemde ilgili kayıt bulunmamaktadır",
                    ResultObject = null,
                    Success = true
                };
            }
        }

        public async Task<ResponseObject<Order>> Update(Order model)
        {
            try
            {
                _dataContext.Orders.Update(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<Order>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<Order>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<Order>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }
    }
}
