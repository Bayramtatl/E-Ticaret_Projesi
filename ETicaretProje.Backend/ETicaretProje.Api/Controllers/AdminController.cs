using EticaretProje.Domain.Dtos;
using EticaretProje.Domain.Entities;
using ETicaretProje.Business.Abstract;
using ETicaretProje.Business.Concrete;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretProje.Api.Controllers
{
    [ApiController]
    public class AdminController : ControllerBase
    {
        private IAdminRepository _adminRepository;
        public AdminController(IAdminRepository adminRepository)
        {
            _adminRepository = adminRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Register(Admin admin)
        {
            var result = await _adminRepository.Add(admin);
            if (result.Success)
                return Ok(result);

            return BadRequest(result);
        }
        [HttpPost]
        public async Task<IActionResult> Login(UserLoginDto user)
        {
            var result = await _adminRepository.Login(user);
            if (result.Success) return Ok(result);
            else { return BadRequest(result); }
        }
        public async Task<IActionResult> Update(Admin admin)
        {
            var result = await _adminRepository.Update(admin);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }
    }
}
