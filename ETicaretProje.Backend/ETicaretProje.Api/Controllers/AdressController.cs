using EticaretProje.Domain.Entities;
using ETicaretProje.Business.Abstract;
using ETicaretProje.Business.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretProje.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AdressController : ControllerBase
    {
        private IAdressRepository _adressRepository;
        public AdressController(IAdressRepository adressRepository)
        {
            _adressRepository = adressRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Add(Adress adress)
        {
            var result = await _adressRepository.Add(adress);
            if (result.Success)
                return Ok(result);

            return BadRequest(result);

        }
        [HttpGet]
        public async Task<IActionResult> GetByCustomerId(int id)
        {
            var result = await _adressRepository.GetByCustomerId(id);
            if (result.ResultObject != null)
            {
                return Ok(result);
            }
            else
            {
                return NotFound(result);
            }
        }
        [HttpPost]
        public async Task<IActionResult> Update(Adress adress)
        {
            var result = await _adressRepository.Update(adress);
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
