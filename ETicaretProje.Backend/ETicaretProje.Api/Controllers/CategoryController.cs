using EticaretProje.Domain.ResponseClasses;
using EticaretProje.Domain.Entities;
using ETicaretProje.Business.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ETicaretProje.Business.Concrete;

namespace ETicaretProje.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private ICategoryRepository _categoryRepository;
        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository= categoryRepository;
        }
        [HttpPost]
        public async Task<IActionResult> Add(Category category)
        {
            var result = await _categoryRepository.Add(category);
            if (result.Success)
                return Ok(result);

            return BadRequest(result);

        }
        [HttpGet]
        public async Task<IActionResult> Delete(int id) // product ile bağlantısı var dikkat
        {
            var result = await _categoryRepository.Delete(id);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                if(result.ResultObject == null)
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
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _categoryRepository.GetById(id);
            if (result.ResultObjects != null)
            {
                return Ok(result);
            }
            else
            {
                return NotFound(result);
            }
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _categoryRepository.GetAll();
            if(result.Success)
            {
                if(result.ResultObjects != null)
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
        [HttpPost]
        public async Task<IActionResult> Update(Category category)
        {
            var result = await _categoryRepository.Update(category);
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
