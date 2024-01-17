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
    public class AdressRepository : IAdressRepository
    {
        private readonly DataContext _dataContext;
        public AdressRepository(DataContext dataContext)
        {
            _dataContext= dataContext;
        }

        public async Task<ResponseObject<Adress>> Add(Adress model)
        {
            try
            {
                _dataContext.Adresses.Add(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<Adress>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<Adress>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<Adress>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }

        public async Task<ResponseObject<Adress>> Delete(int id)
        {
            Adress deleted_obj = _dataContext.Adresses.FirstOrDefault(i => i.Id == id);
            if (deleted_obj != null)
            {
                _dataContext.Adresses.Remove(deleted_obj);
                var saveResult = await _dataContext.SaveChangesAsync();
                if (saveResult > 0)
                {
                    return new ResponseObject<Adress>()
                    {
                        Message = "Silme İşlemi Başarılı",
                        ResultObject = null,
                        Success = true
                    };
                }
                return new ResponseObject<Adress>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = deleted_obj,
                    Success = false
                };
            }
            else
            {
                return new ResponseObject<Adress>()
                {
                    Message = "İlgili kayıt bulunamadı",
                    ResultObject = null,
                    Success = false
                };
            }
        }

        public async Task<ResponseObject<Adress>> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<ResponseObject<Adress>> GetById(int id)
        {
            var Adress = _dataContext.Adresses.FirstOrDefault(i => i.Id == id);
            if (Adress != null)
            {
                return new ResponseObject<Adress>()
                {
                    Message = "İşlem Başarılı, kayıtlar listelendi",
                    ResultObject = Adress,
                    Success = true
                };
            }
            else
            {
                return new ResponseObject<Adress>()
                {
                    Message = "Sistemde ilgili kayıt bulunmamaktadır",
                    ResultObject = null,
                    Success = true
                };
            }
        }

        public async Task<ResponseObject<Adress>> Update(Adress model)
        {
            try
            {
                _dataContext.Adresses.Update(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<Adress>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<Adress>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<Adress>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }
    }
}
