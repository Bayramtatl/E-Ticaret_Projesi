using EticaretProje.Domain.Entities;
using ETicaretProje.Business.Abstract;
using ETicaretProje.Business.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretProje.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private IOrderRepository _orderRepository;
        private ICartProductRepository _cartProductRepository;
        public OrderController(IOrderRepository orderRepository, ICartProductRepository cartProductRepository)
        {
            _orderRepository = orderRepository;
            _cartProductRepository = cartProductRepository;
        }
        [HttpPost]
        public async Task<IActionResult> Add(Order order)
        {
            var result = await _orderRepository.Add(order);
            if (result.Success)
                return Ok(result);

            return BadRequest(result);

        }
    }
}
