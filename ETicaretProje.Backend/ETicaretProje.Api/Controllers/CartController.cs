using EticaretProje.Domain.Entities;
using ETicaretProje.Business.Abstract;
using ETicaretProje.Business.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretProje.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private ICartRepository _cartRepository;
        public CartController(ICartRepository cartRepository)
        {
            _cartRepository = cartRepository;
        }
        [HttpPost]
        public async Task<IActionResult> Add(Cart cart)
        {
            var result = await _cartRepository.Add(cart);
            if (result.Success)
                return Ok(result);

            return BadRequest(result);

        }
        [HttpPost]
        public async Task<IActionResult> Update(Cart cart)
        {
            var result = await _cartRepository.Update(cart);
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
