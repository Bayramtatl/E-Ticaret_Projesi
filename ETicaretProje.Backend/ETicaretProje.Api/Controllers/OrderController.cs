using EticaretProje.Domain.Entities;
using ETicaretProje.Business.Abstract;
using ETicaretProje.Business.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretProje.Api.Controllers
{
    [ApiController]
    public class OrderController : ControllerBase
    {
        private IOrderRepository _orderRepository;
        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
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
