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
    public class VoteCanController : ControllerBase
    {
        private readonly VotingDBContext _context;

        public VoteCanController(VotingDBContext context)
        {
            _context = context;
        }

        // GET: api/VoteCan
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VoteCan>>> GetVoteCan()
        {
            return await _context.VoteCan.ToListAsync();
        }

        // GET: api/VoteCan/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VoteCan>> GetVoteCan(int id)
        {
            var voteCan = await _context.VoteCan.FindAsync(id);

            if (voteCan == null)
            {
                return NotFound();
            }

            return voteCan;
        }

        // PUT: api/VoteCan/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        /*[HttpPut("{id}")]
        public async Task<IActionResult> PutVoteCan(int id, VoteCan voteCan)
        {
            voteCan.VoteCanID = id;

            _context.Entry(voteCan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VoteCanExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }*/

        // POST: api/VoteCan
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<VoteCan>> PostVoteCan(VoteCan voteCan)
        {
            _context.VoteCan.Add(voteCan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVoteCan", new { id = voteCan.VoteCanID }, voteCan);
        }

        // DELETE: api/VoteCan/5
        /*[HttpDelete("{id}")]
        public async Task<ActionResult<VoteCan>> DeleteVoteCan(int id)
        {
            var voteCan = await _context.VoteCan.FindAsync(id);
            if (voteCan == null)
            {
                return NotFound();
            }

            _context.VoteCan.Remove(voteCan);
            await _context.SaveChangesAsync();

            return voteCan;
        }*/

        private bool VoteCanExists(int id)
        {
            return _context.VoteCan.Any(e => e.VoteCanID == id);
        }
    }
}
