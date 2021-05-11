using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VotingSystems.Models;

namespace VotingSystems.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Rank2AdminController : ControllerBase
    {
        private readonly VotingDBContext _context;

        public Rank2AdminController(VotingDBContext context)
        {
            _context = context;
        }

        // GET: api/Rank2Admin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rank2Admin>>> GetRank2Admin()
        {
            return await _context.Rank2Admin.ToListAsync();
        }

        // GET: api/Rank2Admin/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Rank2Admin>> GetRank2Admin(int id)
        {
            var rank2Admin = await _context.Rank2Admin.FindAsync(id);

            if (rank2Admin == null)
            {
                return NotFound();
            }

            return rank2Admin;
        }

        // PUT: api/Rank2Admin/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRank2Admin(int id, Rank2Admin rank2Admin)
        {
            if (id != rank2Admin.Rank2AdminID)
            {
                return BadRequest();
            }

            _context.Entry(rank2Admin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Rank2AdminExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Rank2Admin
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Rank2Admin>> PostRank2Admin(Rank2Admin rank2Admin)
        {
            _context.Rank2Admin.Add(rank2Admin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRank2Admin", new { id = rank2Admin.Rank2AdminID }, rank2Admin);
        }

        // DELETE: api/Rank2Admin/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Rank2Admin>> DeleteRank2Admin(int id)
        {
            var rank2Admin = await _context.Rank2Admin.FindAsync(id);
            if (rank2Admin == null)
            {
                return NotFound();
            }

            _context.Rank2Admin.Remove(rank2Admin);
            await _context.SaveChangesAsync();

            return rank2Admin;
        }

        private bool Rank2AdminExists(int id)
        {
            return _context.Rank2Admin.Any(e => e.Rank2AdminID == id);
        }
    }
}
