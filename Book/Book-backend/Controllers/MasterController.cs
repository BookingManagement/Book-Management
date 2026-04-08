using Book_backend.Data;
using Book_backend.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Book_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MasterController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MasterController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Get:Api/Master/books
        [HttpGet("books")]
        public async Task<ActionResult<List<BookDto>>> GetBooks()
        {
            var books = await _context.BookMasters
                .Where(b => b.Active)
                .Select(b => new BookDto
                {
                    BookId = b.BookId,
                    BookName = b.BookName
                })
            .ToListAsync();
            return Ok(books);
        }

        // Get:Api/Master/shops
        [HttpGet("shops")]
        public async Task<ActionResult<List<ShopDto>>> GetShops()
        {
            var shops = await _context.ShopMasters
                .Where(b => b.Active)
                .Select(b => new ShopDto
                {
                    ShopId = b.ShopId,
                    ShopName = b.ShopName
                })
            .ToListAsync();
            return Ok(shops);
        }

        // Get:Api/Master/agents
        [HttpGet("agents")]
        public async Task<ActionResult<List<AgentDto>>> GetAgents()
        {
            var agents = await _context.AgentMasters
                .Where(b => b.Active)
                .Select(b => new AgentDto
                {
                    AgentId = b.AgentId,
                    AgentName = b.AgentName
                })
            .ToListAsync();
            return Ok(agents);
        }
    }
}
