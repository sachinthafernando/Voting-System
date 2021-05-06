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
    public class District_PartyController : ControllerBase
    {
        private readonly VotingDBContext _context;

        public District_PartyController(VotingDBContext context)
        {
            _context = context;
        }

        // GET: api/District_Party
        [HttpGet]
        public async Task<ActionResult<IEnumerable<District_Party>>> GetDistrict_Parties()
        {
            return await _context.District_Parties.ToListAsync();
        }

        // GET: api/District_Party/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<District_Party>>> GetDistrict_Party(int id)
        {
            return await _context.District_Parties.Where(x => x.District_ID == id).ToListAsync();
        }

        // PUT: api/District_Party/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        /*[HttpPut("{id}")]
        public async Task<IActionResult> PutDistrict_Party(int id, District_Party district_Party)
        {
            if (id != district_Party.District_ID)
            {
                return BadRequest();
            }

            _context.Entry(district_Party).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!District_PartyExists(id))
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

        // POST: api/District_Party
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<District_Party>> PostDistrict_Party(District_Party district_Party)
        {
            _context.District_Parties.Add(district_Party);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (District_PartyExists(district_Party.District_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDistrict_Party", new { id = district_Party.District_ID }, district_Party);
        }

        // DELETE: api/District_Party/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<District_Party>> DeleteDistrict_Party(int id)
        {
            var district_Party = await _context.District_Parties.FindAsync(id);
            if (district_Party == null)
            {
                return NotFound();
            }

            _context.District_Parties.Remove(district_Party);
            await _context.SaveChangesAsync();

            return district_Party;
        }

        private bool District_PartyExists(int id)
        {
            return _context.District_Parties.Any(e => e.District_ID == id);
        }
    }
}
