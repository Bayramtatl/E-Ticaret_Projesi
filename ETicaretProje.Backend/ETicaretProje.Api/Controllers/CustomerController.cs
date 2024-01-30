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
        private IAdressRepository _adressRepository;
        private ICartRepository _cartRepository;
        public CustomerController(ICustomerRepository customerRepository, IAdressRepository adressRepository, ICartRepository cartRepository)
        {
            _customerRepository = customerRepository;
            _adressRepository = adressRepository;
            _cartRepository = cartRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody]UserRegisterDto user)
        {
            var address = new Adress();
            address.City = user.City;
            address.County = user.County;
            address.Description= user.Description;
            var cart = new Cart();
            cart.IsActive = true;
            var customer = new Customer();
            customer.Name = user.Name;
            customer.Surname = user.Surname;
            customer.PhoneNumber = user.PhoneNumber;
            customer.Email = user.Email;
            customer.IsActive = true;
            customer.Password= user.Password;
            var result = await _customerRepository.Add(customer);
            if (result.Success)
            {
                address.CustomerId = customer.Id;
                await _adressRepository.Add(address);
                cart.Customer = customer;
                cart.CustomerId = customer.Id;
                await _cartRepository.Add(cart);
                customer.CartId= cart.Id;
                _customerRepository.Update(customer);
                return Ok(result);
            }

            return BadRequest(result);
        }
        [HttpPost]
        public async Task<IActionResult> Login([FromBody]UserLoginDto user)
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
