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
        private readonly IWebHostEnvironment _environment;
        public ProductController(IProductRepository productRepository, IWebHostEnvironment environment)
        {
            _productRepository = productRepository;
            _environment = environment;
        }
        [HttpPost]
        public async Task<IActionResult> UploadImage()
        {
            try
            {
                var imagepath = @"/assets\uploads\";
                var file = Request.Form.Files[0]; // Gelen dosya
                var folderName = "uploads"; // Kaydedilecek klasör adı
                var webRootPath = @"C:\Users\tatlb\Desktop\Angulat Bootcamp\ETicaretProje\ETicaretProje.Frontend\src\assets";

                // Tam klasör yolu
                var newPath = Path.Combine(webRootPath, folderName);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath); // Klasörü oluştur
                }

                if (file.Length > 0)
                {
                    var fileName = Path.GetFileName(file.FileName);
                    var filePath = Path.Combine(newPath, fileName);

                    // Dosyayı kopyala
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }

                    // Dosyanın yoluyla birlikte başarılı yanıt gönder
                    return Ok(Path.Combine(imagepath, fileName));
                }
                else
                {
                    return BadRequest("Dosya boş.");
                }
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
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
