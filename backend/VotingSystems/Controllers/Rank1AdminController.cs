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
    public class Rank1AdminController : ControllerBase
    {
        private readonly VotingDBContext _context;

        public Rank1AdminController(VotingDBContext context)
        {
            _context = context;
        }

        // GET: api/Rank1Admin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rank1Admin>>> GetRank1Admin()
        {
            return await _context.Rank1Admin.ToListAsync();
        }

        // GET: api/Rank1Admin/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Rank1Admin>> GetRank1Admin(int id)
        {
            var rank1Admin = await _context.Rank1Admin.FindAsync(id);

            if (rank1Admin == null)
            {
                return NotFound();
            }

            return rank1Admin;
        }

        // PUT: api/Rank1Admin/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRank1Admin(int id, Rank1Admin rank1Admin)
        {
            if (id != rank1Admin.Rank1AdminID)
            {
                return BadRequest();
            }

            _context.Entry(rank1Admin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Rank1AdminExists(id))
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

        // POST: api/Rank1Admin
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Rank1Admin>> PostRank1Admin(Rank1Admin rank1Admin)
        {
            _context.Rank1Admin.Add(rank1Admin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRank1Admin", new { id = rank1Admin.Rank1AdminID }, rank1Admin);
        }

        // DELETE: api/Rank1Admin/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Rank1Admin>> DeleteRank1Admin(int id)
        {
            var rank1Admin = await _context.Rank1Admin.FindAsync(id);
            if (rank1Admin == null)
            {
                return NotFound();
            }

            _context.Rank1Admin.Remove(rank1Admin);
            await _context.SaveChangesAsync();

            return rank1Admin;
        }

        private bool Rank1AdminExists(int id)
        {
            return _context.Rank1Admin.Any(e => e.Rank1AdminID == id);
        }
    }
}
