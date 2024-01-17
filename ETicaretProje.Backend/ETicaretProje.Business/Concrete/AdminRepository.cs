using EticaretProje.Domain.Entities;
using EticaretProje.Domain.ResponseClasses;
using ETicaretProje.Business.Abstract;
using ETicaretProje.Dal.Context;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretProje.Business.Concrete
{
    public class AdminRepository : IAdminRepository
    {
        private readonly DataContext _dataContext;
        public AdminRepository(DataContext dataContext)
        {
            _dataContext= dataContext;
        }
        public async Task<ResponseObject<Admin>> Add(Admin model)
  
        {
            try
            {
                _dataContext.Admins.Add(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<Admin>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<Admin>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<Admin>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }

        public async Task<ResponseObject<Admin>> Delete(int id)
        {
            Admin deleted_obj = _dataContext.Admins.FirstOrDefault(i => i.Id == id);
            if (deleted_obj != null)
            {
                _dataContext.Admins.Remove(deleted_obj);
                var saveResult = await _dataContext.SaveChangesAsync();
                if (saveResult > 0)
                {
                    return new ResponseObject<Admin>()
                    {
                        Message = "Silme İşlemi Başarılı",
                        ResultObject = null,
                        Success = true
                    };
                }
                return new ResponseObject<Admin>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = deleted_obj,
                    Success = false
                };
            }
            else
            {
                return new ResponseObject<Admin>()
                {
                    Message = "İlgili kayıt bulunamadı",
                    ResultObject = null,
                    Success = false
                };
            }
        }

        public async Task<ResponseObject<Admin>> GetAll()
        {
            var admin = _dataContext.Admins.ToList();
            if (admin != null)
            {
                return new ResponseObject<Admin>()
                {
                    Message = "İşlem Başarılı, kayıtlar listelendi",
                    ResultObjects = admin,
                    Success = true
                };
            }
            else
            {
                return new ResponseObject<Admin>()
                {
                    Message = "Sistemde ilgili kayıtlar bulunmamaktadır",
                    ResultObjects = null,
                    Success = true
                };
            }
        }

        public async Task<ResponseObject<Admin>> GetById(int id)
        {
            var admin =   _dataContext.Admins.FirstOrDefault(i=> i.Id == id);
            if (admin != null)
            {
                return new ResponseObject<Admin>()
                {
                    Message = "İşlem Başarılı, kayıtlar listelendi",
                    ResultObject = admin,
                    Success = true
                };
            }
            else
            {
                return new ResponseObject<Admin>()
                {
                    Message = "Sistemde ilgili kayıt bulunmamaktadır",
                    ResultObject = null,
                    Success = true
                };
            }
        }

        public async Task<ResponseObject<Admin>> Update(Admin model)
        {
            try
            {
                _dataContext.Admins.Update(model);

                var saveresult = await _dataContext.SaveChangesAsync();

                if (saveresult > 0)
                {
                    return new ResponseObject<Admin>()
                    {
                        Message = "İşlem Başarılı",
                        ResultObject = model,
                        Success = true
                    };
                }
                return new ResponseObject<Admin>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };

            }
            catch (Exception)
            {
                return new ResponseObject<Admin>()
                {
                    Message = "İşlem Sırasında Hata Oluştu",
                    ResultObject = model,
                    Success = false
                };
            }
        }
    }
}
