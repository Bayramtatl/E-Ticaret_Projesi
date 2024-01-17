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
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext _dataContext;
        public ProductRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<ResponseObject<Product>> Add(Product model)
        {
            try
            {
                _dataContext.Products.Add(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<Product>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<Product>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<Product>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }

        public async Task<ResponseObject<Product>> Delete(int id)
        {
            Product deleted_obj = _dataContext.Products.FirstOrDefault(i => i.Id == id);
            if (deleted_obj != null)
            {
                _dataContext.Products.Remove(deleted_obj);
                var saveResult = await _dataContext.SaveChangesAsync();
                if (saveResult > 0)
                {
                    return new ResponseObject<Product>()
                    {
                        Message = "Silme İşlemi Başarılı",
                        ResultObject = null,
                        Success = true
                    };
                }
                return new ResponseObject<Product>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = deleted_obj,
                    Success = false
                };
            }
            else
            {
                return new ResponseObject<Product>()
                {
                    Message = "İlgili kayıt bulunamadı",
                    ResultObject = null,
                    Success = false
                };
            }
        }

        public async Task<ResponseObject<Product>> GetAll()
        {
            var Product = _dataContext.Products.ToList();
            if (Product != null)
            {
                return new ResponseObject<Product>()
                {
                    Message = "İşlem Başarılı, kayıtlar listelendi",
                    ResultObjects = Product,
                    Success = true
                };
            }
            else
            {
                return new ResponseObject<Product>()
                {
                    Message = "Sistemde ilgili kayıtlar bulunmamaktadır",
                    ResultObjects = null,
                    Success = true
                };
            }
        }

        public async Task<ResponseObject<Product>> GetById(int id)
        {
            var Product = _dataContext.Products.FirstOrDefault(i => i.Id == id);
            if (Product != null)
            {
                return new ResponseObject<Product>()
                {
                    Message = "İşlem Başarılı, kayıtlar listelendi",
                    ResultObject = Product,
                    Success = true
                };
            }
            else
            {
                return new ResponseObject<Product>()
                {
                    Message = "Sistemde ilgili kayıt bulunmamaktadır",
                    ResultObject = null,
                    Success = true
                };
            }
        }

        public async Task<ResponseObject<Product>> Update(Product model)
        {
            try
            {
                _dataContext.Products.Update(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<Product>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<Product>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<Product>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }
    }
}
