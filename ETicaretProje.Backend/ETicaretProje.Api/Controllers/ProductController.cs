using EticaretProje.Domain.Entities;
using ETicaretProje.Business.Abstract;
using ETicaretProje.Business.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretProje.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Add(Product product)
        {
            var result = await _productRepository.Add(product);
            if (result.Success)
                return Ok(result);

            return BadRequest(result);

        }
        [HttpPost]
        public async Task<IActionResult> Update(Product product)
        {
            var result = await _productRepository.Update(product);
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
            var result = await _productRepository.Delete(id);
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
        public async Task<IActionResult> GetAll()
        {
            var result = await _productRepository.GetAll();
            if (result.Success)
            {
                if (result.ResultObjects != null)
                {
                    return Ok(result);
                }
                else
                {
                    return NotFound(result);
                }
            }
            return BadRequest(result);
        }

    }
}
