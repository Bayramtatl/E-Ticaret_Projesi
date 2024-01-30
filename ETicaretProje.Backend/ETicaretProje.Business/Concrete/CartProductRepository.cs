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
    public class CartProductRepository : ICartProductRepository
    {
        private readonly DataContext _dataContext;
        public CartProductRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task<ResponseObject<CartProduct>> Add(CartProduct model)
        {
            try
            {
                var cp = _dataContext.CartProducts.FirstOrDefault(i => i.ProductId == model.ProductId && i.CartId == model.CartId);
                if (cp != null)
                {
                    cp.Quantity = cp.Quantity + 1;
                    _dataContext.CartProducts.Update(cp);
                    await _dataContext.SaveChangesAsync();
                    return new ResponseObject<CartProduct>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                _dataContext.CartProducts.Add(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<CartProduct>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<CartProduct>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<CartProduct>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }

        public async Task<ResponseObject<CartProduct>> Delete(int id)
        {
            CartProduct deleted_obj = _dataContext.CartProducts.FirstOrDefault(i => i.Id == id);
            if (deleted_obj != null)
            {
                _dataContext.CartProducts.Remove(deleted_obj);
                var saveResult = await _dataContext.SaveChangesAsync();
                if (saveResult > 0)
                {
                    return new ResponseObject<CartProduct>()
                    {
                        Message = "Silme İşlemi Başarılı",
                        ResultObject = null,
                        Success = true
                    };
                }
                return new ResponseObject<CartProduct>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = deleted_obj,
                    Success = false
                };
            }
            else
            {
                return new ResponseObject<CartProduct>()
                {
                    Message = "İlgili kayıt bulunamadı",
                    ResultObject = null,
                    Success = false
                };
            }
        }

        public Task<ResponseObject<CartProduct>> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<ResponseObject<CartProduct>> GetById(int id)
        {
            var CartProduct = _dataContext.CartProducts.FirstOrDefault(i => i.Id == id);
            if (CartProduct != null)
            {
                return new ResponseObject<CartProduct>()
                {
                    Message = "İşlem Başarılı, kayıtlar listelendi",
                    ResultObject = CartProduct,
                    Success = true
                };
            }
            else
            {
                return new ResponseObject<CartProduct>()
                {
                    Message = "Sistemde ilgili kayıt bulunmamaktadır",
                    ResultObject = null,
                    Success = true
                };
            }
        }
        public async Task<ResponseObject<CartProduct>> GetByCartId(int id)
        {
            var CartProducts = _dataContext.CartProducts.Where(i => i.CartId == id).ToList();
            if (CartProducts != null)
            {
                return new ResponseObject<CartProduct>()
                {
                    Message = "İşlem Başarılı, kayıtlar listelendi",
                    ResultObjects = CartProducts,
                    Success = true
                };
            }
            else
            {
                return new ResponseObject<CartProduct>()
                {
                    Message = "Sistemde ilgili kayıt bulunmamaktadır",
                    ResultObjects = null,
                    Success = true
                };
            }
        }

        public async Task<ResponseObject<CartProduct>> Update(CartProduct model)
        {
            try
            {
                _dataContext.CartProducts.Update(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<CartProduct>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<CartProduct>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<CartProduct>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }
    }
}
