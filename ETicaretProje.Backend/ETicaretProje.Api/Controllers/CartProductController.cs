using EticaretProje.Domain.Entities;
using ETicaretProje.Business.Abstract;
using ETicaretProje.Business.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretProje.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CartProductController : Controller
    {
        private ICartProductRepository _cartproductRepository;
        public CartProductController(ICartProductRepository cartproductRepository)
        {
            _cartproductRepository = cartproductRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody]CartProduct cartproduct)
        {
            var result = await _cartproductRepository.Add(cartproduct);
            if (result.Success)
                return Ok(result);

            return BadRequest(result);

        }
        [HttpPost]
        public async Task<IActionResult> Update(CartProduct cartproduct)
        {
            var result = await _cartproductRepository.Update(cartproduct);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _cartproductRepository.Delete(id);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                if (result.ResultObject == null)
                {
                    return NotFound(result);
                }
                else
                {
                    return BadRequest(result);
                }
            }
        }
        [HttpGet]
        public async Task<IActionResult> GetByCartId(int id)
        {
            var result = await _cartproductRepository.GetByCartId(id);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                if (result.ResultObjects == null)
                {
                    return NotFound(result);
                }
                else
                {
                    return BadRequest(result);
                }
            }
        }
    }
}
