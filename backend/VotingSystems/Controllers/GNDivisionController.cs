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
    public class GNDivisionController : ControllerBase
    {
        private readonly VotingDBContext _context;

        public GNDivisionController(VotingDBContext context)
        {
            _context = context;
        }

        // GET: api/GNDivision
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GNDivision>>> GetGNDivisions()
        {
            return await _context.GNDivisions.ToListAsync();
        }

        // GET: api/GNDivision/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GNDivision>> GetGNDivision(int id)
        {
            var gNDivision = await _context.GNDivisions.FindAsync(id);

            if (gNDivision == null)
            {
                return NotFound();
            }

            return gNDivision;
        }

        // PUT: api/GNDivision/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGNDivision(int id, GNDivision gNDivision)
        {
            gNDivision.ID = id;

            _context.Entry(gNDivision).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GNDivisionExists(id))
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

        // POST: api/GNDivision
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<GNDivision>> PostGNDivision(GNDivision gNDivision)
        {
            _context.GNDivisions.Add(gNDivision);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGNDivision", new { id = gNDivision.ID }, gNDivision);
        }

        // DELETE: api/GNDivision/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GNDivision>> DeleteGNDivision(int id)
        {
            var gNDivision = await _context.GNDivisions.FindAsync(id);
            if (gNDivision == null)
            {
                return NotFound();
            }

            _context.GNDivisions.Remove(gNDivision);
            await _context.SaveChangesAsync();

            return gNDivision;
        }

        private bool GNDivisionExists(int id)
        {
            return _context.GNDivisions.Any(e => e.ID == id);
        }
    }
}
