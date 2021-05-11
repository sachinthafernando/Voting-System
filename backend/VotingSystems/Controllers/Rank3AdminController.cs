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
    public class Rank3AdminController : ControllerBase
    {
        private readonly VotingDBContext _context;

        public Rank3AdminController(VotingDBContext context)
        {
            _context = context;
        }

        // GET: api/Rank3Admin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rank3Admin>>> GetRank3Admin()
        {
            return await _context.Rank3Admin.ToListAsync();
        }

        // GET: api/Rank3Admin/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Rank3Admin>> GetRank3Admin(int id)
        {
            var rank3Admin = await _context.Rank3Admin.FindAsync(id);

            if (rank3Admin == null)
            {
                return NotFound();
            }

            return rank3Admin;
        }

        // PUT: api/Rank3Admin/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRank3Admin(int id, Rank3Admin rank3Admin)
        {
            if (id != rank3Admin.Rank3AdminID)
            {
                return BadRequest();
            }

            _context.Entry(rank3Admin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Rank3AdminExists(id))
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

        // POST: api/Rank3Admin
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Rank3Admin>> PostRank3Admin(Rank3Admin rank3Admin)
        {
            _context.Rank3Admin.Add(rank3Admin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRank3Admin", new { id = rank3Admin.Rank3AdminID }, rank3Admin);
        }

        // DELETE: api/Rank3Admin/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Rank3Admin>> DeleteRank3Admin(int id)
        {
            var rank3Admin = await _context.Rank3Admin.FindAsync(id);
            if (rank3Admin == null)
            {
                return NotFound();
            }

            _context.Rank3Admin.Remove(rank3Admin);
            await _context.SaveChangesAsync();

            return rank3Admin;
        }

        private bool Rank3AdminExists(int id)
        {
            return _context.Rank3Admin.Any(e => e.Rank3AdminID == id);
        }
    }
}
