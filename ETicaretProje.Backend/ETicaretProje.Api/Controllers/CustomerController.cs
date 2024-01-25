using EticaretProje.Domain.Dtos;
using EticaretProje.Domain.Entities;
using ETicaretProje.Business.Abstract;
using ETicaretProje.Business.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretProje.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    public class CustomerController : Controller
    {
        private ICustomerRepository _customerRepository;
        public CustomerController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Register(Customer customer)
        {
            var result = await _customerRepository.Add(customer);
            if (result.Success)
                return Ok(result);

            return BadRequest(result);
        }
        [HttpPost]
        public async Task<IActionResult> Login(UserLoginDto user)
        {
            var result = await _customerRepository.Login(user);
            if(result.Success) return Ok(result);
            else { return BadRequest(result); }
        }

        [HttpPost]
        public async Task<IActionResult> Update(Customer customer)
        {
            var result = await _customerRepository.Update(customer);
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
