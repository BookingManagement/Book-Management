using Book_backend.Data;
using Book_backend.DTOs;
using Book_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Book_backend.Controllers
{

        [Route("api/[controller]")]
        [ApiController]
        public class InwardController : ControllerBase
        {
            private readonly ApplicationDbContext _context;

            public InwardController(ApplicationDbContext context)
            {
                _context = context;
            }

            // POST: api/Inward
            [HttpPost]
            public async Task<IActionResult> createInward([FromBody] InwardDto dto)
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                // 🔹 Validate Foreign Keys (Important)
                var bookExists = await _context.BookMasters.AnyAsync(b => b.BookId == dto.BookId);
                var shopExists = await _context.ShopMasters.AnyAsync(s => s.ShopId == dto.ShopId);
                var agentExists = await _context.AgentMasters.AnyAsync(a => a.AgentId == dto.AgentId);

                if (!bookExists || !shopExists || !agentExists)
                {
                    return BadRequest("Invalid Book, Shop, or Agent ID");
                }

                // 🔹 Map DTO → Model
                var inward = new InwardMaster
                {
                    BookId = dto.BookId,
                    ShopId = dto.ShopId,
                    AgentId = dto.AgentId,
                    Quantity = dto.Quantity,
                    Remarks = dto.Remarks,
                    InwardDate = dto.InwardDate,
                    Status = "Created",
                    Active = true,
                    CreatedBy = dto.CreatedBy,
                    CreatedDate = DateTime.Now
                };

                // 🔹 Save
                _context.InwardMasters.Add(inward);
                await _context.SaveChangesAsync();

                return Ok(new
                {
                    message = "Inward entry created successfully",
                    data = inward
                });
            }

            // GET: api/Inward/recent
            [HttpGet("recent")]
            public async Task<IActionResult> GetRecentInwards()
            {
                var recentInwards = await _context.InwardMasters
                    .Include(i => i.Book)
                    .Include(i => i.Shop)
                    .Include(i => i.Agent)
                    .OrderByDescending(i => i.InwardDate)
                    .Take(50)
                    .Select(i => new
                    {
                        rowId = i.RowId,
                        bookName = i.Book != null ? i.Book.BookName : string.Empty,
                        shopName = i.Shop != null ? i.Shop.ShopName : string.Empty,
                        agentName = i.Agent != null ? i.Agent.AgentName : string.Empty,
                        quantity = i.Quantity,
                        remarks = i.Remarks,
                        inwardDate = i.InwardDate,
                        status = i.Status,
                        active = i.Active,
                        createdBy = i.CreatedBy
                    })
                    .ToListAsync();
                
                return Ok(recentInwards);
            }
        }
    }
