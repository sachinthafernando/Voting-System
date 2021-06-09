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
    public class Rank4AdminController : ControllerBase
    {
        private readonly VotingDBContext _context;

        public Rank4AdminController(VotingDBContext context)
        {
            _context = context;
        }

        // GET: api/Rank4Admin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rank4Admin>>> GetRank4Admin()
        {
            return await _context.Rank4Admin.ToListAsync();
        }

        // GET: api/Rank4Admin/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Rank4Admin>> GetRank4Admin(int id)
        {
            var rank4Admin = await _context.Rank4Admin.FindAsync(id);

            if (rank4Admin == null)
            {
                return NotFound();
            }

            return rank4Admin;
        }

        // PUT: api/Rank4Admin/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRank4Admin(int id, Rank4Admin rank4Admin)
        {
            if (id != rank4Admin.Rank4AdminID)
            {
                return BadRequest();
            }

            _context.Entry(rank4Admin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Rank4AdminExists(id))
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

        // PUT: api/Rank4Admin/State/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("State/{id}")]
        public async Task<IActionResult> PutRank4AdminState(int id, Rank4Admin rank4Admin)
        {
            var result = _context.Rank4Admin.FirstOrDefault(n => n.Rank4AdminID == id);

            if (rank4Admin.Rank4AdminID != result.Rank4AdminID)
            {
                result.Rank4AdminID = result.Rank4AdminID;
                result.Name = result.Name;
                result.Password = result.Password;
                result.PersonDist = rank4Admin.PersonDist;
                result.PersonDiv = rank4Admin.PersonDiv;
                result.ScanScreen = rank4Admin.ScanScreen;
                result.VoteScreen = rank4Admin.VoteScreen;
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Rank4AdminExists(id))
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

        // PUT: api/Rank4Admin/Screen/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("Screen/{id}")]
        public async Task<IActionResult> PutRank4AdminScreen(int id, Rank4Admin rank4Admin)
        {
            var result = _context.Rank4Admin.FirstOrDefault(n => n.Rank4AdminID == id);

            if (rank4Admin.Rank4AdminID != result.Rank4AdminID)
            {
                result.Rank4AdminID = result.Rank4AdminID;
                result.Name = result.Name;
                result.Password = result.Password;
                result.PersonDist = result.PersonDist;
                result.PersonDiv = result.PersonDiv;
                result.ScanScreen = rank4Admin.ScanScreen;
                result.VoteScreen = rank4Admin.VoteScreen;
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Rank4AdminExists(id))
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

        // PATCH: api/Rank4Admin/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        /*[HttpPatch("{id}")]
        public async Task<IActionResult> PatchRank4Admin(int id, [FromBody]JsonPatchDocument<Rank4Admin> rank4Admin)
        {
            if(rank4Admin == null)
            {
                return BadRequest("object is null");
            }
            try
            {
                var result = _context.Rank4Admin.FirstOrDefault(n => n.Rank4AdminID == id);
                if(result == null)
                {
                    return BadRequest();
                }
                rank4Admin.ApplyTo(result);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }

        }*/

        // POST: api/Rank4Admin
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Rank4Admin>> PostRank4Admin(Rank4Admin rank4Admin)
        {
            _context.Rank4Admin.Add(rank4Admin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRank4Admin", new { id = rank4Admin.Rank4AdminID }, rank4Admin);
        }

        // DELETE: api/Rank4Admin/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Rank4Admin>> DeleteRank4Admin(int id)
        {
            var rank4Admin = await _context.Rank4Admin.FindAsync(id);
            if (rank4Admin == null)
            {
                return NotFound();
            }

            _context.Rank4Admin.Remove(rank4Admin);
            await _context.SaveChangesAsync();

            return rank4Admin;
        }

        private bool Rank4AdminExists(int id)
        {
            return _context.Rank4Admin.Any(e => e.Rank4AdminID == id);
        }
    }
}
